import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Front from './src/pages/Front';
import Shop from './src/pages/Shop';
import Product from './src/pages/Product';
import Notification from './src/pages/Notification';
import Like from './src/pages/Like';
import Profile from './src/pages/Profile';

import { Entypo, FontAwesome, EvilIcons } from '@expo/vector-icons';
import Sandal from './src/pages/Sandal';
import Climbing from './src/pages/Climbing';
import Heels from './src/pages/Heels';
import Slider from './src/pages/Slider';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Front" component={Front} />
          <Stack.Screen options={{ headerShown: false }} name="Shop" component={Shop} />
          <Stack.Screen options={{ headerShown: false }} name="Product" component={Product} />
          <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
          <Stack.Screen options={{ headerShown: false }} name="Like" component={Like} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
          <Stack.Screen options={{ headerShown: false }} name="Sandal" component={Sandal} />
          <Stack.Screen options={{ headerShown: false }} name="Climbing" component={Climbing} />
          <Stack.Screen options={{ headerShown: false }} name="Heels" component={Heels} />
          <Stack.Screen options={{ headerShown: false }} name="Slider" component={Slider} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={{ backgroundColor: '#fff', height: 60, bottom: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, elevation: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Front')}><Entypo name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Like')}><FontAwesome name="heart-o" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity><Text>MENU</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}><FontAwesome name="bell-o" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}><FontAwesome name="user-o" size={24} color="black" /></TouchableOpacity>

      </View> */}

    </>

  );
}
