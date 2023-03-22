import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";


// ! stack navigate
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// !components
import Welcome from './components/Welcome';
// ! Screens
import Home from './screens/Home';
import Categories from './screens/Categories';
import Profile from './screens/Profile';
import Login from './screens/Login';
import SingleProduct from './screens/SingleProduct';
// ! Redux
import { useSelector } from "react-redux";
import ProductsCategories from './screens/ProductsCategories';

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
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Categories" component={Categories} />
                            <Stack.Screen name="Profile" component={Profile} />
                            <Stack.Screen name="ProductsCategories" component={ProductsCategories} />
                            <Stack.Screen name="SingleProduct" component={SingleProduct} />
                        </>
                }
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Index;