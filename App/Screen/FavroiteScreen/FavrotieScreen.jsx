import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function FavrotieScreen() {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={styles.itemContainer}>
        <Image 
          source={require('./../../../assets/Images/Bilify.jpeg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Ather Energy Charging Station</Text>
          <Image 
            source={require('./../../../assets/Images/Heart1.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Image 
          source={require('./../../../assets/Images/JioEv.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Jio-bp pulse Charging Station</Text>
          <Image 
            source={require('./../../../assets/Images/Heart1.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Image 
          source={require('./../../../assets/Images/pureEngery.jpeg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>EV Dock Charging Station</Text>
          <Image 
            source={require('./../../../assets/Images/Heart1.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Image 
          source={require('./../../../assets/Images/Station.jpeg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>ABB Charging Station</Text>
          <Image 
            source={require('./../../../assets/Images/Heart1.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Image 
          source={require('./../../../assets/Images/TataEv.jpeg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tata Power EV</Text>
          <Image 
            source={require('./../../../assets/Images/Heart1.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Image 
          source={require('./../../../assets/Images/TataPower.jpeg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tata Power Charging Station</Text>
          <Image 
            source={require('./../../../assets/Images/Heart1.png')}
            style={styles.icon}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // occupy full width of ScrollView
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
};
