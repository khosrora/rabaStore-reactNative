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
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

enableScreens();


function App(): JSX.Element {


  return (
    <Provider store={Store}>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle='dark-content'
        showHideTransition='slide'
      />
      <Index />
    </Provider>
  );
}

export default App;