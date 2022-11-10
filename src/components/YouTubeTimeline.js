import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubeTimeline() {
  return (
    <View style={styles.container}>
        <View style={styles.timeLine}>
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
    timeLine: {
        flex: 1,
        height: 5,
        backgroundColor: 'cyan',
        marginTop: 250,
    },
})