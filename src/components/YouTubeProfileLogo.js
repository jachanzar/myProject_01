import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function YouTubeProfileLogo() {
  return (
    <View style={styles.container}>
        <View style={styles.logo}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justfiyContent: 'center',
    },
    logo: {
        marginTop: 265,
        marginLeft: 20,
        height: 35,
        width: 35,
        backgroundColor: 'white',
      },
})