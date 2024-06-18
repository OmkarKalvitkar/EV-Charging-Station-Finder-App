// src/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{'<-'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.editButton}>✎</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image
          style={styles.avatar}
          source={require('./../../../assets/Images/omkaraa.jpeg')} // Replace with the actual image URL or import the image locally
        />
        <Text style={styles.name}>Omkar Kalvitkar</Text>
        <Text style={styles.phone}>+91 9326579484</Text>
      </View>
      <View style={styles.menu}>
        {renderMenuItem('Personal Information')}
        {renderMenuItem('My Vehicle')}
        {renderMenuItem('Payment Methods')}
        {renderMenuItem('Support')}
        {renderMenuItem('Passwords')}
        {renderMenuItem('Privacy Policy')}
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const renderMenuItem = (title) => (
  <TouchableOpacity style={styles.menuItem} key={title}>
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 24,
  },
  editButton: {
    fontSize: 24,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  phone: {
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
    marginLeft: 16,
  },
  logoutButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  logoutText: {
    fontSize: 18,
    color: 'red',
  },
});
