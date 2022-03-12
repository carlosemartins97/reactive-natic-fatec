import {Text, View, StyleSheet } from 'react-native';

export default function Contador(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{props.valor}</Text>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }

});
