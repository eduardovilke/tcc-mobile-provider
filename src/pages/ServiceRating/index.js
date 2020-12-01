import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';

import { Feather} from '@expo/vector-icons';

import styles from './styles'
import api from '../../services/api'

export default function ServiceRating({ navigation, route }){
  const [nameClient, setNameClient] = useState('')
  const [lastNameClient, setLastNameClient] = useState('')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')

  function navigateToBack(){
    navigation.navigate('ServicesRecentList')
  }
  async function loadInformations(){
    try {
      const response = await api.get(`usuario/${route.params.item.cliente_id}`)
      setNameClient(response.data.nome)
      setLastNameClient(response.data.sobrenome)
      setCity(response.data.cidade)
      setNeighborhood(response.data.bairro)
      setStreet(response.data.rua)
      setNumber(response.data.numero)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadInformations();
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

        <Text style={styles.client}>
          Avaliação
        </Text>
        <Text styles={styles.clientName}>
          Nota: {`${route.params.item.nota_avaliacao}`}
        </Text>
        <Text styles={styles.clientName}>
          Descrição: {`${route.params.item.descricao_avaliacao}`}
        </Text>
      </View>
    </View>
  )
}