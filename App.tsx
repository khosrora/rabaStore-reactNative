/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native"


import RNBootSplash from "react-native-bootsplash";
import Index from "./src";

function App(): JSX.Element {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true, duration: 500 });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);

  return (
    <SafeAreaView >
      <Index />
    </SafeAreaView>
  );
}

export default App;