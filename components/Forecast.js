import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.forecastT1}>{props.main}</Text>
            <Text style={styles.forecastT2}>{props.description}</Text>
            <View>
                <Text style={styles.forecastT1}>{props.temp} °C</Text>
            </View>
            <Text style={styles.forecastT2}>{props.place}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    forecastT1: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        paddingTop: 20
    },
    forecastT2: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingTop: 20,
    },
    
});