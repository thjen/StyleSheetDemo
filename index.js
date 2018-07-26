import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style = {style.container}>
                <Text style = {style.mytext1}>Hi q thJen</Text>
                <Text style = {style.mytext2}>thjen It</Text>
                <Text style = {[style.mytext1, style.mytext2]}>thjen It</Text>
                <Text style = {[style.mytext2, style.mytext1]}>thjen It</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#28b463',
        borderWidth: 2,
        borderColor: '#1f6'
    },
    mytext1: {
        margin: 30, color: 'white'
    },
    mytext2: {
        margin: 5,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20
    }
});

AppRegistry.registerComponent('StyleSheetDemo', () => App);
