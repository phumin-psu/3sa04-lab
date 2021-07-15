import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.WeatherBG}>
                    <Text style={styles.WeatherT}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
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
        height: '50%',
    },
});

