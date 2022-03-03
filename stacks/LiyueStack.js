import { createStackNavigator } from "@react-navigation/stack";
import LiyueCharas from "../components/LiyueCharas.js";

const Stack = createStackNavigator();

export default function LiyueStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="LiyueCharas" component={LiyueCharas} />
    </Stack.Navigator>
  )
}