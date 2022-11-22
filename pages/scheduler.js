import React, { useState } from 'react'
import {View, StyleSheet,TextInput, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker'
import Service from '../services/serverService'
import Button from '../components/button'
import Footer from '../components/footer'

const Scheduler = ({ route }) => {
  const [date, setDate] = useState(new Date())

  const { itemId } = route.params
  return(
    <View>
      {
        Service.map((id) => { 
          if(id.id === itemId)
            return(
              <Text key={id.id} style={styles.title}>{
                id.title              
              }</Text>
            )
        })
      }
      <Text style={styles.text}>Tipo de serviço: </Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Troca de óleo', value: 'troca de oleo' },
          { label: 'troca de pneu', value: 'troca de pneu' },
          { label: 'Revisão', value: 'revisão' },
          { label: 'Alinhamento', value: 'alinhamento' },
          { label: 'Outros Serviço', value: 'Outros Serviço' }
        ]}
      />
      <View>
        <Text style={styles.text}>Selecione um dia para realizar o serviço</Text>
        <DatePicker date={date} onDateChange={setDate}/> 
      </View>
      <View>
        <Text style={styles.espaco}>Observação</Text>
          <View style={styles.container} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              numberOfLines={10}
              multiline={true}
            />
          </View>
      </View>
      <View style={styles.button}>
        <Button label='Enviar' />
      </View>
      <View style={styles.footer}>
        <Footer/>
      </View>
    </View>
  )
} 
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginLeft: 6,
    padding: 3,
    width: 347,
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  title: {
    top: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textArea:{
    height: 160
  },
  text:{
    paddingTop: 100,
    marginLeft: 6,
    fontSize: 17
  },
  espaco: {
    marginLeft: 6,
    paddingTop: 10,
    fontSize: 17
  },
})

export default Scheduler