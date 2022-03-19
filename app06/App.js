import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const pic = 'https://thumbs.dreamstime.com/z/figura-com-ponto-de-interroga%C3%A7%C3%A3o-9068618.jpg';

  const [number, setNumber] = useState();

  function handleGenerateNumber() {
    setNumber(Math.floor(Math.random() * 10))
  }

  return (
    <View style={styles.container}>
      <Text>Jogo do N° Aleatório</Text>

      <Image
        source={{ uri: pic}}
        style={{ width: 200, height: 200, borderRadius: 300, marginVertical: 24}}
      ></Image>

      <Text>
        Pesne em um n° de 0 a 10
      </Text>

      <View style={styles.space}>
        <Text style={styles.result}>
          Resultado: {number}
        </Text>
      </View>

      <Pressable onPress={handleGenerateNumber}>
        <Text style={styles.button}>
          DESCOBRIR
        </Text>
      </Pressable>
      
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
  space: {
    marginVertical: 12
  },
  result: {
    fontWeight: 'bold',
    color: 'gray',
  },
  button: {
    padding: 12,
    backgroundColor: 'green',
    color: 'white'
  }
});
