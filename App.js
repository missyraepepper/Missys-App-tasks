import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Tickets from './src/components/Tickets';
import Contact from './src/components/contact';
import TicketPurchase from './src/components/TicketPurchase';
import News from './src/components/News';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initalRouteName={'Home'}
          screenOptions={{
            headerMode: 'screen',
          }}
        >
          <Stack.Screen
            name={'Home'}
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Home {...props} username={'*username*'} />}
          </Stack.Screen>
          <Stack.Screen
            name={'Tickets'}
            component={Tickets}
            options={{ headerTitleAlign: 'center' }}
          />

          <Stack.Screen
            name={'Contact'}
            component={Contact}
            options={{ headerTitleAlign: 'center', headerTitle: 'Contact Us' }}
          />

          <Stack.Screen
            name={'Purchase'}
            component={TicketPurchase}
            options={{ headerTitleAlign: 'center', headerTitle: 'Ticket Purchase' }}
          />

          <Stack.Screen
            name={'News'}
            component={News}
            options={{ headerTitleAlign: 'center', headerTitle: 'Latest news' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
