
import TrackPlayer, { useProgress, State, Capability } from 'react-native-track-player';

export const setupTrackPlayer = async () => {

    try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
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
        });

    } catch (error) {
        console.log(error);

    }

}
