import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View>
            <Text style={styles.text}>Enter Your Name:</Text>
            <TextInput
                style={styles.border}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(nameValue) => setName(nameValue)}
            />
            <Text>Enter Your Password:</Text>
            <TextInput
                style={styles.border}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(passValue) => setPassword(passValue)}
            />
            {password.length >= 4 ? null : <Text>Your password must be at leat 4 charachters.</Text>}
            <Text style={styles.text}>Your password is: {password}</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    border: {
        borderColor: 'blue',
        borderWidth: 1,
        margin: 15
    },
    text: {
        textAlign: 'center'
    }
});

export default TextScreen;