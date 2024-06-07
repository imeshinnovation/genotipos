import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_100Thin } from '@expo-google-fonts/inter';
import { Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './components/Main';
import Medidor from './components/Medidor';

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Inter_100Thin,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" hidden={false} />
      <NavigationContainer style={{
        backgroundColor: '#500'
      }}>

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: '#9BE',
            headerShown: false,
            headerStyle: { backgroundColor: 'tomato' },
            cardStyle: {
              backgroundColor: '#44C',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Main}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name="Medidor"
            component={Medidor}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
        </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};