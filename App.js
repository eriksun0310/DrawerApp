import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { FontAwesome } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3aec",
          },
          headerTintColor: "white",
          // drawerActiveBackgroundColor: "#3aec",
          // drawerActiveTintColor: "white",
          tabBarActiveTintColor:'#3aec'

        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
            // drawerLabel: "Welcome Screen",
            // drawerIcon: ({ color, size }) => (
            //   <Entypo name="home" size={size} color={color} />
            // ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            // drawerIcon: ({ color, size }) => (
            //   <FontAwesome name="user" size={size} color={color} />
            // ),
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
