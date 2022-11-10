import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubeInfoTitle() {
  return (
    <View style={styles.container}>
        <View style={styles.title}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justfiyContent: 'center',
    },
    title: {
        marginTop: 265,
        marginLeft: 70,
        height: 35,
        width: 290,
        backgroundColor: 'orange',
      },
})