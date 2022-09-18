import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer, { Event } from 'react-native-track-player'
import { setupTrackPlayer } from '../../hooks/AudioPlayerInit'
import { useProgress } from 'react-native-track-player';


const AudioPlayer = () => {
    const { position, buffered, duration } = useProgress()

    const tracks = [
        {
            id: 1,
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            title: 'ONE'
        },
    ]
    useEffect(() => {
        (async () => {
            try {
                await setupTrackPlayer()

                await TrackPlayer.add(tracks)
            } catch (error) {
                console.log("error from", error);

            }


        })()

    })
    const eventFire = () => {
        console.log(Event.PlaybackState);

    }

    return (
        <View>
            <Button title="play" onPress={() => TrackPlayer.play()} />
            <Button title="pause" onPress={() => TrackPlayer.pause()} />
            <Button title="EVENT LOG" onPress={eventFire} />
            <View>
                <Text>Track progress: {position} seconds out of {duration} total</Text>
                <Text>Buffered progress: {buffered} seconds buffered out of {duration} total</Text>
            </View>

        </View>
    )
}

export default AudioPlayer

const styles = StyleSheet.create({})