import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorChanger from '../components/ColorChanger';

const SquareColorChanger = () => {
    return (
        <View>
            <ColorChanger color='Red' />
            <ColorChanger color='Green' />
            <ColorChanger color='Blue' />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SquareColorChanger;