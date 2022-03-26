import { Text, View, Image } from 'react-native';
import {styles} from './styles';

export default function PhotoCard(props) {

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: props.image}}
        style={{ width: 100, height: 100, borderRadius: 8}}
      ></Image>
      <Text style={styles.info}>{props.title}</Text>
    </View>
  );
}

