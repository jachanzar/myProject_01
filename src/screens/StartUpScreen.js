import { Button, StatusBar, StyleSheet, Text, View, Image, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'

const image = {uri:'https://i.pinimg.com/originals/a2/ad/15/a2ad15f8d72e4683919c6b8cdb239f21.jpg'};

 function StartUpScreen() {
  return (
    <View>
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.startup}>49ers App</Text>
                <Button 
                onPress={{}}
                title='Enter App' 
                style={styles.signin} 
                />
            </ImageBackground>
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
      },
    startup: {
        color: 'white',
        fontSize: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',

    },
    signin: {
        backgroundColor: '#B3995D',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'black'
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
});

export default StartUpScreen;