import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function ServiceInformation({ navigation }){
  function navigateToBack(){
    navigation.navigate('Feed')
  }
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
            Torneira com muito vazamento
        </Text>

        <Text style={styles.description}>
          Informações         
        </Text>
        <Text styles={styles.descriptionAbout}>
          Minha torneira está com muito vazamento, 
          preciso de ajudaaaa
        </Text>

        <Text style={styles.client}>
          Cliente
        </Text>
        <Text styles={styles.clientName}>
          Nome: Eduardo Vilke
        </Text>
        <Text styles={styles.clientAddress}>
          Endereço: Chapecó, São Cristóvão,
          Rua Olavo Bilac, 410E
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.getService}>
            <Text style={styles.textGetService}>
              Pegar serviço
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.zap}>
            <Text style={styles.textZap}>
              <FontAwesome name="whatsapp" size={20} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}