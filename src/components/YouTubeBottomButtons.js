import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubeBottomButtons() {
  return (
    <View style={styles.container}>
        <View style={styles.statusBar}>
        </View>
        <View style={styles.videoLengthDisplay}>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        justifyContent: 'space-between',
        
    },
    statusBar: {
        height: 30,
        width: 45,
        backgroundColor: 'lightgreen',
        marginLeft: 300,
        marginTop: 210,
    },
    videoLengthDisplay: {
        height: 30,
        width: 50,
        backgroundColor: 'lightgreen',
        marginLeft: 10, 
        marginRight: 15,
        marginTop: 210,

    },
})