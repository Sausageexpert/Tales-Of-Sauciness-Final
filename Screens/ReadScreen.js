import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import db from '../config';

var author1, story1, title1;
var author2, story2, title2;
var author3, story3, title3;

export default class ReadScreen extends React.Component{

    getInfo = () => {
        db.ref("Story1/Author").on("value", data => {
          author1 = data.val();
        })
        this.setState({author1: author1})

        db.ref("Story2/Author").on("value", data => {
            author2 = data.val();
          })
          this.setState({author2: author2})

          db.ref("Story3/Author").on("value", data => {
            author3 = data.val();
          })
          this.setState({author3: author3})
    }

    constructor(){
        super();
        this.state = {
            author1: '',
            author2: '',
            author3: '',
            story1: ''
        }
    }
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Read Your Stories Here!
                </Text>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.text2}>Story 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.text2}>Story 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.text2}>Story 3</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
        flex: 1
    },

    text: {
        fontSize: 40,
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        textAlign: 'center'  
    },

    button: {
        width: 500,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'pink',
        textAlign: 'center',
        marginTop: 100,
        borderRadius: 40,
    },

    text2: {
        fontFamily: 'Calibri',
      fontSize: 20,
      alignText: 'center',
      marginTop: 10
    }
    
})