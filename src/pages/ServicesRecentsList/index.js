import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {Feather, AntDesign, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import categoryMap from '../../utils/categoryMap'

import api from '../../services/api'

export default function servicesRecentsList({ navigation }){

  const [data, setData] = useState([])
  const [nameUser, setNameUser] = useState('')

  async function loadUser(){

    const jsonValue = await AsyncStorage.getItem('@user')
    const user = jsonValue != null ? JSON.parse(jsonValue) : null;
    setNameUser(user.nome)

    var newstr = user.tipos_servicos.replace('[', '');
    var newstr2 = newstr.replace(']', '');

    try {
      const services = await api.get(`servico/0/${newstr2}`)

      services.data.forEach(item => {
        const service = [{
          id: `${item.id}`,
          category: categoryMap[`${item.tipos_servico_id}`],
          description: item.descricao,
          professional: item.prestador_id,
          situation: item.situacao_id
        }]
        setData(data => data.concat(service))
      })

    } catch (error) {
      console.log(error)
    }
  }

  function navigateToInformations(){
    navigation.navigate('ServiceInformation')
  }

  useEffect(() => {
    loadUser()
  }, [])
  
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Bem Vind@! {nameUser}
        </Text>
        <Text style={styles.subTitle}>
            Aqui estão suas conversas recentes
        </Text>
      </View>

      <FlatList
        data={data}
        style={styles.serviceList}
        showsVerticalScrollIndicator={false}
        renderItem={({item: item}) => (
          <View style={styles.service}>
            <Text style={styles.serviceProperty}>Categoria</Text>
              <View style={styles.categorySituation}> 
                <Text style={styles.serviceValue}>{item.category}</Text>

                { 
                  (item.situation == 3) 
                  ? <AntDesign name="check" size={30} color="green" />
                  : (item.situation == 1) ? <MaterialCommunityIcons name="calendar-clock" size={30} color="#d6d2c9" />
                  : <FontAwesome5 name="calendar-check" size={28} color="#f7c325" />
                } 
                
              </View>
            
            <Text style={styles.serviceProperty}>Descrição</Text>
            <Text style={styles.serviceValue}>{item.description}</Text>
            
            <TouchableOpacity 
              style={styles.detailsButton}
              onPress={navigateToInformations}
            >
              <Text style={styles.detailsButtonText} >Ver informações</Text>
              <Feather name="arrow-right" size={17} color="#4fb4c8"/>
            </TouchableOpacity>
          </View>
          
        )}
      />
    </View>
  )
}