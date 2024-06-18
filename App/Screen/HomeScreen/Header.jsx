import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Color from '../../Utils/Color';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {

    const{user}=useUser();

  return (
    <View  style ={styles.Container}>
      <Image source={{uri:user?.imageUrl}}
      style={{width:45,height:45,borderRadius:99}}/>

      <Image source={require('./../../../assets/Images/LogoEv.png')}
      style={{width:100,height:50,resizeMode:'contain'}}
      />

       <FontAwesome5 name="filter" size={24} color="black" />

    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Color.WHITE_TRANS
    }
})