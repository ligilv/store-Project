/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, type PropsWithChildren } from 'react';
import * as Sentry from '@sentry/react-native'
import {

  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, { useProgress, State, Capability } from 'react-native-track-player';
const tracks = [
  {
    id: 1,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'ONE'
  },
  {
    id: 2,
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'TWo'
  },
]

Sentry.init({
  dsn: 'https://496f3e59149e4466954df23f2380f261@o1341612.ingest.sentry.io/6635294',
  environment: 'Testagain',
  debug: true,

})


const App = () => {
  const setupTracPlayer = async () => {
    try {
      TrackPlayer.updateOptions({
        // Media controls capabilities    
        stoppingAppPausesPlayback: true,

        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext, Capability.SeekTo],

        // Icons for the notification on Android (if you don't like the default ones)

      });
      await TrackPlayer.setupPlayer();

      await TrackPlayer.add(tracks)
    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {

    setupTracPlayer()
  }, [])
  const trackdetails = async () => {
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackIndex);
    console.log(`Title: ${trackObject?.title}`);

    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    console.log(`${duration - position} seconds left.`);

  }
  useEffect(() => {
    setTimeout(() => {

      trackdetails()
    }, 2000)
  })
  var crashmessage = "changes env  back to Testagain"
  const progress = useProgress();
  return (
    <View style={{ marginTop: 20, padding: 20 }}>
      <TouchableOpacity style={{ backgroundColor: 'grey', height: 50, width: 50, marginVertical: 10 }} onPress={() => TrackPlayer.play()}><Text>play</Text></TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'grey', height: 50, width: 50, marginVertical: 10 }} onPress={() => TrackPlayer.pause()}><Text>pause</Text></TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'grey', height: 50, width: 50, marginVertical: 10 }} onPress={() => TrackPlayer.skipToNext()}><Text>next</Text></TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'grey', height: 50, width: 50, marginVertical: 10 }} onPress={() => TrackPlayer.skipToPrevious()}><Text>previous</Text></TouchableOpacity>

    </View>
  );
};


export default App;
