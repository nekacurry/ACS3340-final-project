import { createStackNavigator } from "@react-navigation/stack";
import MondstadtCharas from "../components/MondstadtCharas.js";
import Details from "../components/Details.js";

const Stack = createStackNavigator();

export default function MondstadtStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="MondstadtCharas" component={MondstadtCharas} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}