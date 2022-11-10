import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubeInfoDetails() {
  return (
    <View style={styles.container}>
        <View style={styles.details}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justfiyContent: 'center',
    },
    details: {
        marginTop: 305,
        marginLeft: 70,
        height: 8,
        width: 225,
        backgroundColor: 'orange',
      },
})