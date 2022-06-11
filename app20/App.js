import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Filme from "./src/components/Filme";
import Home from "./src/components/Home";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App de Filmes" component={Home} />
        <Stack.Screen name="Detalhes" component={Filme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
