import * as firebase from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../utils/firebase-config';
const app = initializeApp(firebaseConfig)
const firebaseAnalytics = firebase.getAnalytics(app);

type Props = {
    channelName: any;
}

export const logWebVisited = () => {
    firebase.logEvent(firebaseAnalytics, 'webVisited');
};

export const logChannelVisited = async ({channelName}:Props) => {
    await firebase.logEvent(firebaseAnalytics, `visited channel of ${channelName}`);
};

export const playTrack = ({channelName}:Props) => {
    firebase.logEvent(firebaseAnalytics, `playing tracks of ${channelName}`);
};

export const pauseTrack = ({channelName}:Props) => {
    firebase.logEvent(firebaseAnalytics, `pause tracks of ${channelName}`);
};
