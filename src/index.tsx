import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";


// ! stack navigate
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// !components
import Welcome from './components/Welcome';
// ! Screens
import Home from './screens/Home';


const Index = () => {

    
        
    return (
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            {
                true ? 
                <Stack.Screen name="Welcome" component={Welcome} />
                :
                <Stack.Screen name="Home" component={Home} />
            }
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Index;