import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubeInfoBar() {
  return (
    <View style={styles.container}>
        <View style={styles.infoBar}>
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
    infoBar: {
      flex: 1,
      marginTop: 255,
      height: 75,
      backgroundColor: 'blue',
    },

})