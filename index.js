import React from 'react'
import { ReactNative, AppRegistry, Text } from 'react-native';
import Header from './src/components/header';
//Create a Component 
const App = () => {
    return (
        <Header headerText={'Albams'}/>
    );
};


//Render it to device
AppRegistry.registerComponent('albums', () => App);