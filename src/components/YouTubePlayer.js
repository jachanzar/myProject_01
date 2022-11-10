import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubePlayer() {
  return (
    <View style={styles.container}>
        <View style={styles.videoWindow}>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    videoWindow: {
        flex: 1,
        height: 250,
        backgroundColor: 'maroon',
    },
    infoBar: {
      height: 75,
      width: 20,
      backgroundColor: 'blue',
    }
})