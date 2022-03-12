import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from './components/Input';
import {useState} from 'react';

export default function App() {

  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [total, setTotal] = useState();

  function getFirstInputValue(value) {
    setFirst(value);
  }

  function getSecondInputValue(value) {
    setSecond(value);
  }

  function handleCalculate() {
    setTotal(first * second);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de números</Text>

        <Input 
          placeholderMsg={"Digite o primeiro número"}
          func={getFirstInputValue}
        />
        <Input 
          placeholderMsg={"Digite o segundo número"}
          func={getSecondInputValue}
        />

        <Pressable onPress={handleCalculate}>
          <Text>
            Calcular
          </Text>
        </Pressable>

        <Text>Resultado: {total}</Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 21,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
});
