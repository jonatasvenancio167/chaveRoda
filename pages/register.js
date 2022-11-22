import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native'
import * as yup from 'yup';
import TextInput from '../components/insertText'
import Button from '../components/button'
import { customeAlert } from '../components/customeAlert';
import { register } from '../services/requestFirebase';
import { collection, doc, getFirestore, addDoc } from "firebase/firestore"

const RegisterUser = () => {
  const formatPhone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const [errors, setErrors] = useState([])
  const [fields, setFields] = useState({
    username: '',
    phone: '',
    address: '',
    mail: '',
    password: '',
    confirmPassword: ''
  });

  async function addUser(username, phone, address){
    const db = getFirestore()
    const teste = await addDoc(collection(db, 'Users'), {
      name: username,
      telephone: phone,
      address: address
    })
    console.log(teste)
  }

  async function accomplishRegister(mail, password){
    const result = await register(mail, password)
    
    if(result == 'sucesso'){
      Alert.alert('Usuário cadastrado com sucesso')
      setFields('')
    }
  }

  const schema = yup.object({
    username: yup.string()
    .required('Nome é obrigatório'),
    phone: yup.string().matches(formatPhone, 'Telefone não é valido')
    .required('O seu telefone não pode ficar em branco'),
    address: yup.string()
    .required('Digite o seu endereço'),
    mail: yup.string()
    .email('E-mail precisar ser válido')
    .required('E-mail é obrigatorio'),
    password: yup.string()
    .required('Senha é obrigatoria'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Senha não coincide'),
  })

  const validate = (values) => {
    try {
      const object = schema.validateSync(values, { abortEarly: false });
      setErrors([]);
      // accomplishRegister(object.mail, object.password)
      addUser(object.username, object.phone, object.address)
    }
    catch (e){
      setErrors(e.errors)
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

  return(
    <KeyboardAvoidingView
      style={styles.container}
    >
      <View style={styles.view}>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.viewInput}>
          <TextInput
            icon='user'
            placeholder='Insira o seu nome'
            autoCapitalize='none'
            keyboardAppearance='dark'
            returnKeyType='next'
            returnKeyLabel='next'
            onChangeText={(e) => handleChange('username', e)}
            value={fields.username}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            icon='phone'
            placeholder='Digite o seu telefone'
            autoCapitalize='none'
            keyboardAppearance='dark'
            returnKeyType='next'
            returnKeyLabel='next'
            keyboardType='phone-pad'
            onChangeText={(e) => handleChange('phone', e)}
            value={fields.phone}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            icon='address'
            placeholder='Digite o seu endereço'
            autoCapitalize='none'
            keyboardAppearance='dark'
            returnKeyType='next'
            returnKeyLabel='next'
            onChangeText={(e) => handleChange('address', e)}
            value={fields.address}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            icon='mail'
            placeholder='Insira o seu email'
            autoCapitalize='none'
            autoCompleteType='emal'
            keyboardType='eamil-address'
            keyboardAppearance='dark'
            returnKeytype='next'
            returnKeyLabel='next'
            onChangeText={(e) => handleChange('mail', e)}
            value={fields.mail}
          />
        </View>
        <View style={styles.viewInput}>
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
        <View style={styles.viewInput}>
          <TextInput
            icon='key'
            placeholder='Confirme a sua senha'
            secureTextEntry
            autoCompleteType='password'
            autoCapitalize='none'
            keyboardAppearance='dark'
            returnKeyType='go'
            returnKeyLabel='go'
            onChangeText={(e) => handleChange('confirmPassword', e)}
            value={fields.confirmPassword}
          />
        </View>
        
        <Button label='Cadastrar' onPress={() => validate(fields)} />
        {errors && errors.map((error, index) => <Text key={index} style={styles.errors}>{error}</Text>)}
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#223e4b',
    fontSize: 30,
    fontFamily: 'Arial',
    bottom: 50
  },
  viewInput: {
    paddingHorizontal: 32,
    marginBottom: 16,
    width: '100%',
  },
  errors: {
    color: 'red',
    marginBottom: 2
  }
})

export default RegisterUser