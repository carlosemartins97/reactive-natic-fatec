import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { api } from './src/services/api';

export default function App() {

  const [cep, setCep] = useState();

  const [data, setData] = useState();

  function fetchCep() {
    if(cep.length === 8) {
      api.get(`${cep}/json`).then(res => {
        setData(res.data);
      }).catch(e => {
        console.log(e)
      })
    }
  }

  useEffect(() => {console.log(data)}, [data])

  return (
    <View style={styles.container}>
      <Text>CEP x ENDEREÇO</Text>

      <View>
        <View style={{background: 'black', borderRadius: 4, borderWidth: 1, borderColor: 'red'}}>
          <TextInput onChange={e => setCep(e.target.value)} style={{color: 'white', padding: 4}} placeholder="Digite um cep..."/>
        </View>
        <Pressable style={{backgroundColor: 'green', alignItems: 'center', padding: 4}} onPress={fetchCep}>
          <Text style={{color: 'white'}}>Pesquisar</Text>
        </Pressable>
      </View>

      {
        data && (
          <>
            <View style={{marginVertical: 16}}>
              <Text>
                CEP: {data.cep}
              </Text>

              <Text>
                Logradouro: {data.logradouro}
              </Text>

              <Text>
                Bairro: {data.bairro}
              </Text>

              <Text>
                Cidade: {data.localidade}
              </Text>

              <Text>
                Estado: {data.uf}
              </Text>
            </View>
          </>
        )
      }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
