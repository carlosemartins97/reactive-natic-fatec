import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [total, setTotal] = useState(0);

  function handleAlcool(text) {
    setAlcool(text)
  }
  function handleGasolina(text) {
    setGasolina(text)
  }

  function handleCalculate() {
    setTotal(alcool/gasolina);
  }

  function cleanResult() {
    setTotal(0)
    setAlcool(0)
    setGasolina(0)
  }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      <Input 
        placeholder="Preço do Álcool"
        func={handleAlcool}
      />

      <Input 
        placeholder="Preço da Gasolina"
        func={handleGasolina}
      />

      <Pressable  onPress={handleCalculate}>
          <Text style={styles.button}>
            Verificar
          </Text>
      </Pressable>

      <Text styles={styles.result}>Resultado:</Text>
      <Text>
        {
          total >= 0.7 && ('Gasolina está mais em conta!') 
        }

        {
          total !== 0 && total < 0.7 && ('Álcool está mais em conta')
        }
      </Text>

      {total !== 0 && (
        <Pressable  onPress={cleanResult}>
          <Text style={styles.button}>
            Limpar
          </Text>
        </Pressable>
      )}
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
  button: {
    marginVertical: 24,
    backgroundColor: 'green',
    padding: 12,
    textTransform: 'uppercase',
    color: 'white'
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
