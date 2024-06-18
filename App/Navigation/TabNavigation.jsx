import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavrotieScreen from '../Screen/FavroiteScreen/FavrotieScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Color from '../Utils/Color';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator  screenOptions={{
      headerShown:false,
    }}>

      <Tab.Screen name='home'
      component={HomeScreen}
      options={{
        tabBarLabel:'Serach',
        tabBarActiveTintColor:Color.PRIMARY,
        tabBarIcon:({color,size})=>(

          <Ionicons name="search" size={size} color={color} />

        )
      }}

      />   

<Tab.Screen name='favorite'
      component={FavrotieScreen}
      
      options={{
        tabBarLabel:'favroite',
        tabBarActiveTintColor:Color.PRIMARY,
        tabBarIcon:({color,size})=>(

          <AntDesign name="heart" size={size} color={color} />

        )
      }}
      />   

<Tab.Screen name='Profile'
      component={ProfileScreen}
      
      options={{
        tabBarLabel:'Profile',
        tabBarActiveTintColor:Color.PRIMARY,
        tabBarIcon:({color,size})=>(

          <FontAwesome name="user-circle" size={size} color={color} />

        )
      }}
      />

</Tab.Navigator>
  )
}