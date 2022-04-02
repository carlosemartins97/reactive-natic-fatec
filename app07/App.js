import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, TextInput, Switch, Pressable} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState();
  const [genero, setGenero] = useState('masculino');
  const [isBrazilian, setIsBrazilian] = useState(false);
  const [escolaridade, setEscolaridade] = useState('ensino médio completo');
  const [slider, setSlider] = useState();
  const [age, setAge] = useState();
  const [data, setData] = useState();

  function showData() {
    setData({
      nome,
      age,
      genero,
      slider,
      escolaridade,
      isBrazilian: isBrazilian === true ? 'sim' : 'não',
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 32, fontWeight: 'bold'}}>ABERTURA DE CONTA</Text>

      <View style={styles.flex}>
        <Text>Nome: </Text>
        <TextInput placeholder='Nome completo' value={nome} onChangeText={(value) => setNome(value)}/>
      </View>

      <View style={styles.flex}>
        <Text>Idade: </Text>
        <TextInput placeholder='Idade' value={age} onChangeText={(value) => setAge(value)} keyboardType='numeric'/>
      </View>


      <View style={styles.flex}> 
        <Text>Sexo: </Text>
        <Picker
          selectedValue={genero}
          onValueChange={(itemValue, itemIndex) => setGenero(itemValue)} 
          enabled={true} 
        >
          <Picker.Item label="masculino" value="masculino" />
          <Picker.Item label="feminino" value="feminino" />
        </Picker>
      </View>

      <View style={styles.flex}> 
        <Text>Escolaridade: </Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)} 
          enabled={true} 
        >
          <Picker.Item label="ensino médio completo" value="ensino médio completo" />
          <Picker.Item label="ensino superior incompleto" value="ensino superior incompleto" />
          <Picker.Item label="ensino médio incompleto" value="ensino médio incompleto" />
        </Picker>
      </View>

      <View style={styles.flex}>
        <Text>Limite: </Text>
        <Slider 
          style={{width: 200}}
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(value) => setSlider(value)}
          value={slider}
          minimumTrackTintColor='blue'
          maximumTrackTintColor='green'
          thumbTintColor='orange'
        />
      </View>
      <Text>{slider}</Text>

      <View style={styles.flex}>
        <Text>Brasileiro: </Text>
        <Switch 
          value={isBrazilian}
          onValueChange={() => setIsBrazilian(previousState => !previousState)}
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={showData}
      >
        <Text style={styles.buttonText}>
          Confirmar
        </Text>
      </Pressable>

      <View>
        {data && Object.keys(data).map((item) => {
          return (
            <View style={styles.flex}>
              <Text
                style={{fontWeight: 'bold', textTransform: 'uppercase'}}
                key={item}
              >
                {item}: 
              </Text>
              <Text> {data[item]}</Text>
            </View>
          )
        })}

      </View>
      
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
  flex: {
    alignItems: 'center', 
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    marginBottom: 24,
  },
  buttonText: {
    color: 'white'
  }
});
