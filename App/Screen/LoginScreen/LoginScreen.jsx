import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../../Utils/Color'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress=async()=>{
    try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
  }

  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:70
    }}>
      <Image source={require('./../../../assets/Images/Evlogo.png')}
      style={styles.logoImage}
      />

      <Image source={require('./../../../assets/Images/Ev-charging.png')}
      style={styles.bgImage}
      />

      <View style={{padding:20}}>
        <Text  style={styles.heading}>Your Ultimate Ev charging Station Finder App</Text>
        <Text style={styles.desc}>Find Ev-Charging Station Near you,plan trip and so much more in just One Click</Text>

<TouchableOpacity style={styles.button}
onPress={onPress}
>
    <Text style={{
        color:Color.WHITE,
        textAlign:'center',
        fontFamily:'out-fit',
        fontSize:17
    }}
    >Lgin With Google</Text>
</TouchableOpacity>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({

    logoImage:{
        width:450,
        height:80,
        objectFit:'contain'
    },
    bgImage:{
        width:'100%',
        height:150,
        marginTop:20,
        objectFit:'cover'

    },
    heading:{
        fontSize:25,
        fontFamily:'outfit-Bold',
        textAlign:'center',
        marginTop:30
    },
    desc:{
        fontSize:15,
        fontFamily:'out-fit',
        marginTop:15,
        textAlign:'center',
        color:Color.GRAY
    },
    button:{
        backgroundColor:Color.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:60
    }

  
})
