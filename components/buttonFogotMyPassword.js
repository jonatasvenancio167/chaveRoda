import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'


function FogotMyPassword(){
  const navigation = useNavigation()

  return(
    <Text
      style={styles.fogotPassword}
      onPress={() => navigation.navigate('FogotPassword')}
    >
    Esqueci a minha senha
  </Text>
  )

}

FogotMyPassword.navigationOptions = {
  title: 'FogotPassword'
}

const styles = StyleSheet.create({
  fogotPassword: {
    color: '#808080',
    fontSize: 13,
    marginBottom: 16,
    right: 90,
  },
})

export default FogotMyPassword