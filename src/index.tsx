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
import Categories from './screens/Categories';

const Index = () => {

    const { global }: any = useSelector(state => state);
    const welcomePage: boolean = global.welcomePage;

    return (
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                {
                    welcomePage ?
                        <Stack.Screen name="Welcome" component={Welcome} />
                        :
                        <>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Categories" component={Categories} />
                        </>
                }
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Index;