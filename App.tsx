/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Index from "./src";

import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens();


function App(): JSX.Element {


  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle='dark-content'
        showHideTransition='slide'
      />
      <Index />
    </>
  );
}

export default App;