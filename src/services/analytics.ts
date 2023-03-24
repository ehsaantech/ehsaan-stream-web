import * as firebase from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../utils/firebase-config";
const app = initializeApp(firebaseConfig);
const firebaseAnalytics = firebase.getAnalytics(app);

export const logWebVisited = () => {
  firebase.logEvent(firebaseAnalytics, "webVisited");
};

export const logEhsaantechVisitors = () => {
  firebase.logEvent(firebaseAnalytics, "Visited Ehsaan Technologies");
};

export const LogChannelVisited = async (channelName: string) => {
  firebase.logEvent(
    firebaseAnalytics,
    `visit channel of scholar ${channelName}`
  );
};

export const playTrack = (channelName: string) => {
  firebase.logEvent(firebaseAnalytics, `playing tracks of ${channelName}`);
};

export const pauseTrack = (channelName: string) => {
  firebase.logEvent(firebaseAnalytics, `pause tracks of ${channelName}`);
};
