import {StyleSheet, View, TextInput} from 'react-native'
import { useState, useEffect } from 'react';

export default function Input(props) {

  const [value, setValue] = useState();

  function handleClear() {
    this.TextInput.clear();
  }

  useEffect(() => {
    props.func(value);
  }, [value])

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={props.placeholder} 
        keyboardType='numeric'
        onChangeText={value => setValue(value)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});