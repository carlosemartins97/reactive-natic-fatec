import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {

  const [Peso, setPeso] = useState(0);
  const [Altura, setAltura] = useState(0);
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState('');

  function handlePeso(text) {
    setPeso(text)
  }
  function handleAltura(text) {
    setAltura(text)
  }

  function handleCalculate() {
    setTotal(Peso/(Altura**2));

    if(total !== 0) {
      if(total < 18.5) {
        setMsg('Abaixo do peso')
      } 
      else if(total >= 18.5 && total <= 24.9) {
        setMsg('Peso normal')
      }
      else if(total >= 25 && total <= 29.9) {
        setMsg('Sobrepeso')
      }
      else if(total >= 30 && total <= 34.9) {
        setMsg('Obesidade Grau 1')
      }
      else if(total >= 35 && total <= 39.9) {
        setMsg('Obesidade Grau 2')
      }
      else if(total >= 40) {
        setMsg('Obesidade Grau 3 ou Mórbida')
      }
      else {
        setMsg('Verifique os dados inseridos e tente novamente')
      }
    }
  }

  function cleanResult() {
    setTotal(0)
    setPeso(0)
    setAltura(0)
    setMsg('');
  }

  const profilePicUrl = 'https://www.ricardogozzano.com.br/wp-content/uploads/2020/03/tabela_imc.png';


  return (
    <View style={styles.container}>
      <Text>Cálculo do IMC</Text>

      <Image
          source={{ uri: profilePicUrl}}
          style={{ width: 300, height: 220, marginVertical: 24}}
        ></Image>
      
      <Input 
        placeholder="Peso (em kg)"
        func={handlePeso}
      />

      <Input 
        placeholder="Altura (em m)"
        func={handleAltura}
      />

      <Pressable  onPress={handleCalculate}>
          <Text style={styles.button}>
            Verificar
          </Text>
      </Pressable>

      <Text styles={styles.result}>Resultado:</Text>
      <Text>
        {msg}
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