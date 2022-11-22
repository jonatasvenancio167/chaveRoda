import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextInput from '../components/insertText'
import Button from '../components/button'

const FogotPassword = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>
        Recuperar senha
      </Text>
      <View style={styles.viewInputEmail}>
        <TextInput
          icon='mail'
          placeholder='Insira o seu email'
          autoCapitalize='none'
          autoCompleteType='emal'
          keyboardType='eamil-address'
          keyboardAppearance='dark'
          returnKeytype='next'
          returnKeyLabel='next'
        />
      </View>
      <Button label='Recupere a sua senha' onPress={() => console.log('Funcionou')} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#223e4b',
    fontSize: 20,
    bottom: 50
  },
  viewInputEmail: {
    paddingHorizontal: 20,
    marginBottom: 16,
    width: '100%',
  },
  viewInputPassword: {
    paddingHorizontal: 20,
    marginBottom: 16,
    width: '100%',
  },
})

export default FogotPassword