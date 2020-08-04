import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} imgScore='5'/>
            <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} imgScore='9' />
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} imgScore='8' />
        </View>
        
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;