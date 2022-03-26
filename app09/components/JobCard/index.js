import { Text, View, Image } from 'react-native';
import {styles} from './styles';

export default function JobCard(props) {

  return (
    <View style={styles.container}>

      <Text style={[styles.info, styles.title]}>{props.title}</Text>

      <Text style={styles.info}>Salário: {props.salario}</Text>
      <Text style={styles.info}>Descrição: {props.description}</Text>
      <Text style={styles.info}>Contato: {props.contato}</Text>
    </View>
  );
}

