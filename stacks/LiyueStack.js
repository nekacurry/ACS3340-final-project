import { createStackNavigator } from "@react-navigation/stack";
import LiyueCharas from "../components/LiyueCharas.js";
import Details from "../components/Details.js";

const Stack = createStackNavigator();

export default function LiyueStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="LiyueCharas" component={LiyueCharas} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}