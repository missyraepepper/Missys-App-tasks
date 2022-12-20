import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Pages/Home/Home';
import Tickets from './src/components/Pages/Tickets/Tickets';
import Contact from './src/components/Pages/Contact/Contact';
import TicketPurchase from './src/components/Pages/TicketPurchase/TicketPurchase';
import News from './src/components/Pages/News/News';
import UserProfile from "./src/components/Pages/UserProfile/UserProfile";

const Stack = createStackNavigator();

const App = () => {
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
            {(props) => <Home {...props} username={'missyraepepper'} />}
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
          <Stack.Screen
              name={'UserProfile'}
              component={UserProfile}
              options={{ headerShown:false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
