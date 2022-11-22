import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const footer = () => {
  return(
    <View style={styles.footer}>
      <Text style={styles.rodape}>
        Laís Gomes
        Laricya Sobreira
        Jônatas Venâncio
      </Text>
      <Text style={styles.footerCopyright}>Rua Caminho Feliz, Nº 199</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
    width: '100%',
    height: 130,
    backgroundColor: '#4F4F4F',
    position: 'relative',
  },

  footerCopyright: {
    top: 30,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
  rodape: {
    top: 4,
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
})

export default footer