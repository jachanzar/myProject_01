import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubeTopButtons() {
  return (
    <View style={styles.container}>
        <View style={styles.muteButton}>
        </View>
        <View style={styles.closeCaptions}>
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
    muteButton: {
        height: 40,
        width: 40,
        backgroundColor: 'yellow',
        marginLeft: 310,
        marginTop: 15,
    },
    closeCaptions: {
        height: 40,
        width: 40,
        backgroundColor: 'yellow',
        marginRight: 15,
        marginTop: 15,

    },
})