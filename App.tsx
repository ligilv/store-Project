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
import AudioPlayer from './src/components/AudioPlayer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setupTrackPlayer } from './src/hooks/AudioPlayerInit';

Sentry.init({
  dsn: 'https://496f3e59149e4466954df23f2380f261@o1341612.ingest.sentry.io/6635294',
  environment: 'Testagain',
  debug: true,

})

const App = () => {




  return (
    <View style={{ marginTop: 20, padding: 20 }}>
      <Icon name="rocket" size={30} color="#900" />
      <AudioPlayer />
    </View>
  );
};


export default App;
