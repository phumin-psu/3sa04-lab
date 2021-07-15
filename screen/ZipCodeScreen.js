import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StatusBar, View, Text, StyleSheet, TouchableHighlight, ImageBackground } from "react-native";

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