import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, View, Text, StyleSheet, TouchableHighlight, ImageBackground, TextInput } from "react-native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.zipI}>
            <Text style={styles.zipT2}>{place}</Text>
            <Text style={styles.zipT2}>{code}</Text>
        </View>
    </TouchableHighlight>
    
)
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    const [number, onChangeNumber] = useState(null);

    useEffect(() => {
        if (number >= 10000) {
            navigation.navigate('Weather', {zipCode: number})
        }
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.zipBG}>
                <View style={styles.zipH}>
                    <Text style={styles.zipT1}>Place</Text>
                    <Text style={styles.zipT1}>Code</Text>
                </View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <View style={styles.zipH}>
                    <Text style={styles.zipT2}>Or Enter Your Zipcode: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="XXXXX Zip Code"
                        keyboardType="numeric"
                    />
                </View>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
      zipI: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipH: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipT1: {
        fontSize: 24,
        color: 'white',
    },
    zipT2: {
        fontSize: 18,
        color: 'white',
    },
    zipBG: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '50%',
    },
})