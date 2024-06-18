import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'
import PlaceListView from './PlaceListView'

export default function HomeScreen() {
  return (
    <View>
      <View  style={styles.headerContainer}>
      <Header/>
      <SearchBar/>
      </View>



      <AppMapView/>
      <View  style={styles.placeListContainer}>
        <PlaceListView/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    position:'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20
  },

  placeListContainer:{
    position:'absolute',
    bottom:0,
    zIndex:10,
    width:'100%'

  }


})
