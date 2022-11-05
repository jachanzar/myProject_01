import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";

const HomeStack = createStackNavigator();

function HomeScreenStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
            <HomeStack.Screen name='About' component={AboutScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
            )
    };

export default HomeScreenStack;

