import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Picker, TextInput, Pressable } from 'react-native';
import {useState} from 'react';

export default function App() {

  const [from, setFrom] = useState('dolar');
  const [to, setTo] = useState('dolar');
  const [value, setValue] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const coin = ['dolar', 'euro', 'real'];

  function handleConvert() {
    if(from === 'dolar' && value) {
      if(to === 'real') {
        setConvertedValue(+value * 4.66);
      } else if(to === 'euro') {
        setConvertedValue(+value * 0.91);
      } else {
        setConvertedValue(+value);
      }
    } else if(from === 'real' && value) {
      if(to === 'real') {
        setConvertedValue(+value);
      } else if(to === 'euro') {
        setConvertedValue(+value * 0.19);
      } else {
        setConvertedValue(+value * 0.21);
      }
    } else if(from === 'euro' && value) {
      if(to === 'real') {
        setConvertedValue(+value * 5.15);
      } else if(to === 'euro') {
        setConvertedValue(+value);
      } else {
        setConvertedValue(+value * 1.1);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 24, fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase'}}>
        Conversor de moedas
      </Text>

      <View style={{alignItems: 'center', flexDirection: 'row', marginBottom: 24,}}>
        <Text>Valor: </Text>
        <TextInput placeholder="Digite um valor para ser convertido" value={value} onChangeText={(value) => setValue(value)} keyboardType='numeric' />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 24,}}>
        <Text>De: </Text>
        <Picker
          selectedValue={from}
          style={{ height: 50, width: 120 }}
          onValueChange={(itemValue, itemIndex) => setFrom(itemValue)}
        >
          {coin.map((item) => <Picker.Item label={item} value={item} key={item} />)}
        </Picker>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 24,}}>
        <Text>Para: </Text>
        <Picker
          selectedValue={to}
          style={{ height: 50, width: 120 }}
          onValueChange={(itemValue, itemIndex) => setTo(itemValue)}
        >
          {coin.map((item) => <Picker.Item label={item} value={item} key={item} />)}
        </Picker>
      </View>

      <Pressable
        style={{backgroundColor: 'green', paddingHorizontal: 48, paddingVertical: 12}}
        onPress={handleConvert}
      >
        <Text style={{color: 'white'}}>Converter</Text>
      </Pressable>

      {
        convertedValue && <Text>{convertedValue}</Text>
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
