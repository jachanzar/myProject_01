import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YouTubePlayer from '../components/YouTubePlayer'
import YouTubeInfoBar from '../components/YouTubeInfoBar'
import YouTubeTopButtons from '../components/YouTubeTopButtons'
import YouTubeBottomButtons from '../components/YouTubeBottomButtons'
import YouTubeTimeline from '../components/YouTubeTimeline'
import YouTubeProfileLogo from '../components/YouTubeProfileLogo'
import YouTubeInfoTitle from '../components/YouTubeInfoTitle'
import YouTubeInfoDetails from '../components/YoutTubeInfoDetails'

export default function YouTubeScreen() {
  return (
    <View>
      <YouTubePlayer />
      <YouTubeTopButtons />
      <YouTubeBottomButtons />
      <YouTubeTimeline />
      <YouTubeInfoBar />
      <YouTubeProfileLogo />
      <YouTubeInfoTitle />
      <YouTubeInfoDetails />
    </View>
  )
}

const styles = StyleSheet.create({

})