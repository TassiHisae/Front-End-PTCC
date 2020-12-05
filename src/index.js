import React from 'react';

import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import App from './App';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fefefe" />
      <App />
    </>
  );
}
