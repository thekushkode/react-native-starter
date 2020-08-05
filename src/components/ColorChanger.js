import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorChanger = ({color, onIncrease, onDecrease}) => { //could be props and then props.color in return

    

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ColorChanger;