import React, { useReducer } from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';


const INCREASE_AMOUNT = 1;

const reducer = (state, action) => {
    // state === { count: num }
    // action === { type: 'Increase' || 'Decrease', payload: 1}
    switch (action.type) {
        case 'Increase':
            return { ...state, count: state.count + action.payload };
        case 'Decrease':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state; //could leave this line off and use state.count

    return (
        <View>
            <Button title='Increase' onPress={() => dispatch({ type: 'Increase', payload: 1 })} />
            <Button title='Decrease' onPress={() => dispatch({ type: 'Decrease', payload: 1 })} />
            <Text style={styles.countAlign}>Current Count: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    countAlign: {
        textAlign: 'center',
        marginTop: 20
    }
})

export default CounterScreen;