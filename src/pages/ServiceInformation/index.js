import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './styles'

import api from '../../services/api'

export default function ServiceInformation({ navigation, route }){
  const [nameClient, setNameClient] = useState('')
  const [lastNameClient, setLastNameClient] = useState('')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [phone, setPhone] = useState('')

  function navigateToBack(){
    navigation.navigate('ServicesRecentList')
  }

  async function loadClient(){
    try {
      const response = await api.get(`usuario/${route.params.item.cliente_id}`)
      setNameClient(response.data.nome)
      setLastNameClient(response.data.sobrenome)
      setCity(response.data.cidade)
      setNeighborhood(response.data.bairro)
      setStreet(response.data.rua)
      setNumber(response.data.numero)
      setPhone(response.data.telefone)
    } catch (error) {
      console.log(error)
    }
  }

  async function changedService(){
    const jsonValue = await AsyncStorage.getItem('@user')
    const user = jsonValue != null ? JSON.parse(jsonValue) : null;

    try {
      const response = await api.put(`servico/${route.params.item.id}`, {
        situacao_id: "2",
        prestador_id: `${user.id}`
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=55${phone}&text=Ola`);
  }

  useEffect(() => {
    loadClient();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather style={styles.headerIcon}
          name="arrow-left" 
          size={30} 
          color="#4b5c6b"
          onPress={navigateToBack}
        />
      </View>

      <View style={styles.service}>

        <Text style={styles.title}>
          Título
        </Text>
        <Text styles={styles.titleAbout}>
            {route.params.item.name}
        </Text>

        <Text style={styles.description}>
          Informações         
        </Text>
        <Text styles={styles.descriptionAbout}>
          {route.params.item.description}
        </Text>

        <Text style={styles.client}>
          Cliente
        </Text>
        <Text styles={styles.clientName}>
          Nome: {`${nameClient} ${lastNameClient}`}
        </Text>
        <Text styles={styles.clientAddress}>
          Endereço: {`${city}, ${neighborhood}, ${street}, ${number}`}
        </Text>

        <View style={styles.buttons}>
          {
            (route.params.item.situation != 1)
            ? <TouchableOpacity 
                style={styles.getServiceDisable}
                onPress={changedService}
                disabled={true}
              >
                <Text style={styles.textGetServiceDisable}>
                  Agendado
                </Text>
              </TouchableOpacity>

            : <TouchableOpacity 
                style={styles.getService}
                onPress={changedService}
              >
                <Text style={styles.textGetService}>
                  Pegar serviço
                </Text>
              </TouchableOpacity>
          }
          <TouchableOpacity 
            style={styles.zap}
            onPress={sendWhatsapp}
          >
            <Text style={styles.textZap}>
              <FontAwesome name="whatsapp" size={20} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}