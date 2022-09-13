import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import TrackPlayer from 'react-native-track-player'

type Props = {}

const PlaysSceen = (props: Props) => {
    const playtrack = () => {
        TrackPlayer.play()
    }
    const pausetrack = () => {
        TrackPlayer.pause()
    }
    return (
        <View>
            <Button title="play" onPress={playtrack} />
            <Button title="pause" onPress={pausetrack} />
        </View>
    )
}

export default PlaysSceen

const styles = StyleSheet.create({})