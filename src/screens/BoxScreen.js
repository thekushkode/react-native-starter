import React from 'react';
import { Text, View, StyleSheet } from  'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textStyle1}>
                
            </View>
            <View style={styles.textStyle2}>
                
            </View>
            <View style={styles.textStyle3}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'purple',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    textStyle1: {
        borderWidth: 2,
        width: '30%',
        backgroundColor: 'red',
        height: 100,
    },
    textStyle2: {
        borderWidth: 2,
        width: '30%',
        backgroundColor: 'green',
        height: 100,
        alignSelf: 'flex-end'

    },
    textStyle3: {
        borderWidth: 2,
        width: '30%',
        backgroundColor: 'blue',
        height: 100,

    },
})

export default BoxScreen;