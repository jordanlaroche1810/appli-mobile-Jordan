import { HomeScreen } from './screens/Home';
import { GyroScreen } from './screens/Gyro';
import { DataScreen } from './screens/Data';
import { GameScreen } from './screens/Game';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Gyro" component={GyroScreen} />
          <Stack.Screen name="Random Data" component={DataScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
