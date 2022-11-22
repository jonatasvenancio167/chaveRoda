import React, { Component, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Service from '../services/serverService'
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer'
import { Card } from 'react-native-paper';
import { auth } from '../config/firebase';

const ServiceHome = () => {
  const navigation = useNavigation()
  const user = auth.currentUser

  // function logout(){
  //   auth.signOut()
  //   navigation.replace('Login')
  // }

  return (

    <SafeAreaView>
      <Text style={styles.title}> Serviços </Text>
      <View>
        {
          Service.map((server) => { 
            return(
              <Card style={styles.center}>
                <Card.Content >
                  <Text
                    key={server.id}
                    onPress={() => navigation.navigate('Scheduler', {
                      itemId: server.id
                    })}
                  >
                    <Card.Cover
                      style={styles.image}
                      source={{uri: server.file.url}}
                    />
                  </Text>
                </Card.Content>
              </Card>
            )  
          })
        }
      </View>
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 32,
    textAlign: 'left',
  },
  image: {
    width: 90,
    height: 90,
    padding: 10,
  },
});

export default ServiceHome