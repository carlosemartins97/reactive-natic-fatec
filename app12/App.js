import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Results from './pages/Results';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator>
       <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Resultados' component={Results} />
     </Tab.Navigator>
    </NavigationContainer>
  );
}

