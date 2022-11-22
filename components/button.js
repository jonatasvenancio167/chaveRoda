import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function  Button({ label, onPress }){
  return(
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >

      <Text style={styles.text}>
        {label}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94832'
  },
  text:{
    fontSize: 18,
    color: 'white',
    textTransform: 'uppercase'
  }
})

export default Button