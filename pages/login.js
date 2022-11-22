import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import * as yup from 'yup';
import TextInput from '../components/insertText'
import Button from '../components/button'
import Register from '../components/buttonRegister'
import FogotMyPassword from '../components/buttonFogotMyPassword';
import { useNavigation } from '@react-navigation/native'
import { login } from '../services/requestFirebase';
// import { auth } from '../config/firebase';
import { customeAlert } from '../components/customeAlert';

const Login = () => {

  // useEffect(() => {
  //   const useState = auth.onAuthStateChanged(user => {
  //     if(user){
  //       navigation.replace('Home')
  //     }
  //   })

  //   return () => useState()
  // }, [])

  const navigation = useNavigation()

  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState({
    mail: '',
    password: ''
  });

  const [error, setError] = useState('')
  const [messageError, setMessageError] = useState('')

  let schema = yup.object({
    mail: yup.string()
    .required('E-mail é obrigatorio'),
    password: yup.string()
    .required('Senha é obrigatoria')
  });

  const validate = (values) => {
    try {
      const field = schema.validateSync(values, { abortEarly: false });
      setErrors([]);
      accomplishLogin(field.mail, field.password)

    } catch (e) {
      setErrors(e.errors);
    }
  }

  const handleChange = (name, value) => {
    setFields((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    validate(fields);
  }

  async function accomplishLogin(mail, password){
    const result = await login(mail, password)
    if(result == 'Error'){
      setError('firebase')
      setMessageError('Email ou Senha não conferem')
    }
    else{
      navigation.replace('Home')
    }
  }

  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require('../icon.png')}
      />
      <Text style={styles.title}>Chave Roda</Text>
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
          onChangeText={function(e) { handleChange('mail', e)}}
          value={fields.mail}
        />
      </View>
      <View style={styles.viewInputPassword}>
        <TextInput
          icon='key'
          placeholder='Insira a sua senha'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={(e) => handleChange('password', e)}
          value={fields.password}
        />
      </View>
      <View>
        <Register/>
        <FogotMyPassword/>
      </View>

      {/* <customeAlert
        message={messageError}
        error={error == 'firebase'}
        setError={setError}
      /> */}

      <Button label='login' onPress={() => validate(fields)} />
      {errors && errors.map((error, index) => <Text key={index}>{error}</Text>)}
    </View>
  )
}

Login.navigationOptions = {
  title: 'Register'
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#223e4b',
    fontSize: 30,
    marginBottom: 16,
    fontFamily: 'Arial',
    top: -90,
    marginBottom: -40,
    fontFamily: 'arial',
  },
  image: {
    color: '#223e4b',
    width: 150,
    height: 150,
    bottom: 110,
    marginBottom: -20
  },
  viewInputEmail: {
    paddingHorizontal: 32,
    marginBottom: 16,
    width: '100%',
  },
  viewInputPassword: {
    paddingHorizontal: 32,
    marginBottom: 16,
    width: '100%',
    marginBottom: 25
  }
})

export default Login