import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import { CheckBox, ListItem } from 'native-base';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RegisterCapabilities(){

  const [checked1, setChecked1] = useState(false);
  function setCheck1(){
    setChecked1(!checked1);
  }

  const [checked2, setChecked2] = useState(false);
  function setCheck2(){
    setChecked2(!checked2);
  }

  const [checked3, setChecked3] = useState(false);
  function setCheck3(){
    setChecked3(!checked3);
  }

  const [checked4, setChecked4] = useState(false);
  function setCheck4(){
    setChecked4(!checked4);
  }

  const [checked5, setChecked5] = useState(false);
  function setCheck5(){
    setChecked5(!checked5);
  }

  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Home');
  }

  async function submit(){
    let arrayT = []
    if(checked1){
      arrayT.push(1)
    }
    if(checked2){
      arrayT.push(2)
    }
    if(checked3){
      arrayT.push(3)
    }
    if(checked4){
      arrayT.push(4)
    }
    if(checked5){
      arrayT.push(5)
    }
    console.log('Valores que foram selecionados: ', arrayT)
  }

  return(
    <KeyboardAvoidingView style={styles.background} behavior="height">
      <View style={styles.header}>
        <Feather style={styles.headerIcon} 
          name="arrow-left" 
          size={30} 
          color="#4b5c6b"
          onPress={ navigateToHome }
          />
        <Text style={styles.title} >Agora nos diga, quais são os serviços que você presta?</Text>
      </View>
      <ScrollView style={styles.checkList}>

        <ListItem style={styles.check}>
          <CheckBox 
            checked={checked1}
            color="#4fb4c8"
            onPress={setCheck1}
            />
            <Text style={styles.txtCheck}>Serviços hidráulicos</Text>
        </ListItem>
        <ListItem style={styles.check}>
          <CheckBox 
            checked={checked2} 
            color="#4fb4c8"
            onPress={setCheck2}
          />
            <Text style={styles.txtCheck}>Serviços elétricos</Text>
        </ListItem>
        <ListItem style={styles.check}>
          <CheckBox 
            checked={checked3} 
            color="#4fb4c8"
            onPress={setCheck3}
          />
            <Text style={styles.txtCheck}>Jardinagem</Text>
        </ListItem>
        <ListItem style={styles.check}>
          <CheckBox 
            checked={checked4} 
            color="#4fb4c8"
            onPress={setCheck4}
          />
            <Text style={styles.txtCheck}>Pequenas pinturas</Text>
        </ListItem>
        <ListItem style={styles.check}>
          <CheckBox 
            checked={checked5} 
            color="#4fb4c8"
            onPress={setCheck5}
          />
            <Text style={styles.txtCheck}>Troca de fechaduras</Text>
        </ListItem>
          
        <View style={styles.footer}>
            <TouchableOpacity style={styles.btnContinuar} onPress={submit}>
            <Text style={styles.txtContinuar} >SALVAR</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
  </KeyboardAvoidingView>

  );
}