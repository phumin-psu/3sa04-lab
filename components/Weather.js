import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'Loading...',
        description: 'Loading...',
        temp: 'Loading...',
        place: 'Loading...',
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d4e2ffa59d2003bd57fc24d1c5277177`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    place: json.name
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.WeatherBG}>
                    <Text style={styles.WeatherT}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                    <Text style={styles.WeatherT}>Powered by openweathermap.org</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    WeatherT: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingTop: '20%'
    },
    WeatherBG: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '60%',
    },
});

