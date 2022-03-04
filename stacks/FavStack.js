import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Details";
import Favorites from "../components/Favorites";

const Stack = createStackNavigator()

export default function FavStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="FavCharas" component={Favorites} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}