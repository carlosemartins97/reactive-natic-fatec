import React from 'react';
import {Text, View} from 'react-native';

export default function Results({route}) {
  return (
    <View>
      <Text>
        Abertura de conta
      </Text>

      <View>
        <Text>Nome: </Text>
        <Text>{route.params?.nome}</Text>
      </View>

      <View>
        <Text>Idade: </Text>
        <Text>{route.params?.idade}</Text>
      </View>

      <View>
        <Text>Sexo: </Text>
        <Text>{route.params?.sexo}</Text>
      </View>
    </View>

  )
}