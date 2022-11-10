import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function NavBarComponent() {
  return (
    <View style = {styles.pView}>
        <View style={[styles.cView, styles.blueBox]}>
            <Text style={styles.boxText}>1</Text>
        </View>
        <View style= {styles.cView}>
            <Text style= {styles.boxText}>2</Text>
        </View>
        <View style={[styles.cView, styles.greenBox]}>
            <Text style={styles.boxText}>3</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    pView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cView: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueBox: {
        marginRight: 175,
        backgroundColor: 'blue',

    },
    greenBox: {
        backgroundColor: 'green',

    },
    boxText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }

})


export default NavBarComponent;
//always apply justifyContent and alignItems on the parent view. That will effect the children views
//default flexDirection is column