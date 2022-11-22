import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Register() {
  const navigation = useNavigation()

  return(
    <Text
    style={styles.register}
    onPress={() => navigation.navigate('Register')}
  >
    Registrar
  </Text>
  )
}

Register.navigationOptions = {
  title: 'Register'
}

const styles = StyleSheet.create({
  register: {
    color: '#808080',
    fontSize: 13,
    marginBottom: -18,
    left: 180
  }
})

export default Register