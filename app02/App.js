import { StyleSheet, Text, View, Pressable  } from 'react-native';
import {useState} from 'react';
import Contador from './components/Contador';

export default function App() {

  const [people, setPeople] = useState(0);

  function addPerson() {
    setPeople(people + 1);
  }

  function removePerson() {
    people > 0 && setPeople(people - 1);
    
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Contador de pessoas</Text>
      </View>
      <Contador valor={people}/>

      <View style={styles.btnControl}>
        <Pressable  style={[styles.button, styles.green]} onPress={addPerson} >
          <Text style={styles.buttonText}>
            +
          </Text>
        </Pressable>
        <Pressable  style={[styles.button, styles.red]} onPress={removePerson} >
          <Text style={styles.buttonText}>
            -
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    marginBottom: 32,
  },
  btnControl: {
    alignItems: 'center',
    marginTop: 32,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 100,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white'
  }, 
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  }

});
