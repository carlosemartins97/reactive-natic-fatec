import { StyleSheet, TextInput } from 'react-native';
import {useState, useEffect} from 'react';

export default function Input(props) {

  const [value, setValue] = useState();

  useEffect(() => {
    props.func(value);
  }, [value])

  return (
      <TextInput 
        styles={styles.input}
        placeholder={props.placeholderMsg}
        keyboardType="numeric"
        onChangeText={value => setValue(value)}
        value={value}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
