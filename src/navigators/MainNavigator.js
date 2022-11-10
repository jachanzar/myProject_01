import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import SignInScreen from "../screens/SignInScreen";
import StartUpScreen from "../screens/StartUpScreen";
import YouTubeScreen from "../screens/YouTubeScreen";

const HomeStack = createStackNavigator();

function HomeScreenStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='YouTube Video' component={YouTubeScreen}></HomeStack.Screen>
            <HomeStack.Screen name='About' component={AboutScreen}></HomeStack.Screen>
            <HomeStack.Screen name='49ers App' component={StartUpScreen}></HomeStack.Screen>
            <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
            <HomeStack.Screen name='Sign-In' component={SignInScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
            )
    };

export default HomeScreenStack;

