import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native'
import { Entypo as Icon } from '@expo/vector-icons'
import { HelperText } from 'react-native-paper';

function TextInput({ icon, error, messageError, ...otherProps }) {
  return(
    <>
      <View style={styles.view}>
        <View style={styles.icon}>
          <Icon name={icon} color={'#223e4b'} size={16} />
        </View>
        <View style={styles.rnTextInput}>
          <RNTextInput
            underlineColorAndroid='transparent'
            placeholderTextColor='rgba(34, 62, 75, 0.7)'
            {...otherProps}
          />
        </View>
      </View>
      {error && <HelperText type="error" visible={error}>
        {messageError}
      </HelperText>}
    </>
  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    borderColor: '#e94832',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 1
  },
  icon: {
    padding: 8
  },
  rnTextInput: {
    flex: 1
  }
})

export default TextInput