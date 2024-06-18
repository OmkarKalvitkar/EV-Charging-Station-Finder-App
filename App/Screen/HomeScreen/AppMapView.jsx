import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewStyle from './../../Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext'

export default function AppMapView() {


  const{location,setLocation}= useContext(UserLocationContext);

  const newMarkerCoordinates = {
    latitude: 19.225664398484845,
    longitude: 73.13358306884767,
  };

  const onemarker = {
    latitude: 19.225664398484845,
    longitude: 73.13358306884767,
  };

  const twomarker = {
    latitude: 19.219910186345988,
    longitude: 73.12551498413087,
  };

  const newMarkerCoordinates3 = {
    latitude: 19.219910186345988,
    longitude: 73.12551498413087,
  };

  const newMarkerCoordinates4 = {
    latitude: 19.203456890978785,
    longitude: 73.12122344970705,
  };

  const newMarkerCoordinates5 = {
    latitude: 19.1967292074432,
    longitude: 73.13135147094728,
  };

  const newMarkerCoordinates6 = {
    latitude: 19.186434508672942,
    longitude: 73.14662933349611,
  };

  const newMarkerCoordinates7 = {
    latitude: 19.188298950677797,
    longitude: 73.10886383056642,
  };

  const newMarkerCoordinates8 = {
    latitude: 19.218451339984867,
    longitude: 73.16070556640626,
  };


  return location?.latitude&&(
    <View>
      <MapView style={styles.map}
      provider={PROVIDER_GOOGLE}
      customMapStyle={MapViewStyle}
      region={{
        latitude:location?.latitude,
        longitude:location?.longitude,
        latitudeDelta:0.0422,
        longitudeDelta:0.0421
      }}

      >
        <Marker
        
        coordinate={{
          latitude:location?.latitude,
          longitude:location?.longitude
        }}
        >
          <Image source={require('./../../../assets/Images/car-maker.png')}
          style={{width:60,height:60}}
          />
        </Marker>

{/* 11111111111 */}
        <Marker
          coordinate={{
            latitude: newMarkerCoordinates.latitude,
            longitude: newMarkerCoordinates.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>


        <Marker
          coordinate={{
            latitude: onemarker.latitude,
            longitude: onemarker.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>


        <Marker
          coordinate={{
            latitude: twomarker.latitude,
            longitude: twomarker.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>

<Marker
coordinate={{
  latitude: newMarkerCoordinates3.latitude,
  longitude: newMarkerCoordinates3.longitude,
}}
>
<Image 
  source={require('./../../../assets/Images/Evmarker.png')}
  style={{ width: 60, height: 60 }}
/>
</Marker>


<Marker
          coordinate={{
            latitude: newMarkerCoordinates4.latitude,
            longitude: newMarkerCoordinates4.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>


        <Marker
          coordinate={{
            latitude: newMarkerCoordinates5.latitude,
            longitude: newMarkerCoordinates5.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>


        <Marker
          coordinate={{
            latitude: newMarkerCoordinates6.latitude,
            longitude: newMarkerCoordinates6.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>


        <Marker
          coordinate={{
            latitude: newMarkerCoordinates7.latitude,
            longitude: newMarkerCoordinates7.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>


        <Marker
          coordinate={{
            latitude: newMarkerCoordinates8.latitude,
            longitude: newMarkerCoordinates8.longitude,
          }}
        >
          <Image 
            source={require('./../../../assets/Images/Evmarker.png')}
            style={{ width: 60, height: 60 }}
          />
        </Marker>





        {/* 22222222222 */}



      </MapView>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });