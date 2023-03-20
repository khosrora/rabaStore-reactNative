import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";


// ! stack navigate
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// !components
import Welcome from './components/Welcome';
// ! Screens
import Home from './screens/Home';
// ! Redux
import { useSelector } from "react-redux";

const Index = () => {

    const { global }: any = useSelector(state => state);
    const welcomePage: boolean = global.welcomePage;
    console.log(welcomePage);


    return (
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                {
                    welcomePage ?
                        <Stack.Screen name="Welcome" component={Welcome} />
                        :
                        <Stack.Screen name="Home" component={Home} />
                }
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Index;