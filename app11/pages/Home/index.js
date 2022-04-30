import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function Home() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');

  const navigation = useNavigation();

  function submit() {
    navigation.navigate('Results', {nome, idade, sexo});
  }

  return (
    <View>
      <Text>
        Abertura de conta
      </Text>

      <View>
        <Text>Nome: </Text>
      < TextInput onChangeText={value => setNome(value)}/>
      </View>

      <View>
        <Text>Idade: </Text>
      < TextInput onChangeText={value => setIdade(value)}/>
      </View>

      <View>
        <Text>Sexo: </Text>
      < TextInput onChangeText={value => setSexo(value)}/>
      </View>

      <Pressable onPress={submit} style={{backgroundColor: 'green', alignItems: 'center', height: 48, justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>Confirmar</Text>
      </Pressable>
    </View>

  )
}