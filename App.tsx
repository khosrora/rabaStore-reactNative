/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Index from "./src";

import { StatusBar, useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

enableScreens();


function App(): JSX.Element {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Provider store={Store}>
      <StatusBar
        animated={true}
        backgroundColor={isDarkTheme ? "#000" : "#FFFFFF"}
        barStyle='dark-content'
        showHideTransition='slide'
      />
      <Index isDarkTheme={isDarkTheme} />
    </Provider>
  );
}

export default App;