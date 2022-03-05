import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const profilePicUrl = 'https://avatars.githubusercontent.com/u/57926397?v=4';

  return (
    <>
      <View style={styles.container}>
        <Image
          source={{ uri: profilePicUrl}}
          style={{ width: 300, height: 300, borderRadius: 300,}}
        ></Image>
      </View>
      <View>
        <Text style={styles.textSimples}>Nome: {"\n"}
          <Text style={styles.textBold}>Carlos Eduardo S. Martins</Text>
        </Text>

        <Text style={styles.textSimples}>Formação: {"\n"}
          <Text style={styles.textBold}>Sistemas para Internet</Text>
        </Text>

        <Text style={styles.textSimples}>Experiências: {"\n"}
          <Text style={styles.textBold}>Desenvolvedor front-end na KBR Tec Soluções</Text> {"\n"}Estágio {"\n"}{"\n"}
          <Text style={styles.textBold}>Desenvolvedor front-end na NTTDATA Brasil</Text> Júnior {"\n"}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 64,
    
  },
  textSimples: {
    marginTop: 16,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  textBold: {
    fontWeight: 'bold',
    lineHeight: 24,
  }
});
