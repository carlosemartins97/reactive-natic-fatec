import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PhotoCard from './components/PhotoCard';

export default function App() {

  const teste = [
    {image: 'https://img.elo7.com.br/product/original/315C8C1/arte-digital-para-anuncios-e-divulgacao-em-midias-digitais-arte-digital.jpg', title: 'Posts'},
    {image: 'https://img.elo7.com.br/product/original/315C8C1/arte-digital-para-anuncios-e-divulgacao-em-midias-digitais-arte-digital.jpg', title: 'Post 2'},
    {image: 'https://img.elo7.com.br/product/original/315C8C1/arte-digital-para-anuncios-e-divulgacao-em-midias-digitais-arte-digital.jpg', title: 'Post 3'},
    {image: 'https://img.elo7.com.br/product/original/315C8C1/arte-digital-para-anuncios-e-divulgacao-em-midias-digitais-arte-digital.jpg', title: 'Post 4'},
    {image: 'https://img.elo7.com.br/product/original/315C8C1/arte-digital-para-anuncios-e-divulgacao-em-midias-digitais-arte-digital.jpg', title: 'Post 5'},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos</Text>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.flex}>
          {
            teste.map((card, index) => (
              <PhotoCard 
                key={index}
                image={card.image}
                title={card.title}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  flex: {
    flex: 1,
    alignItems: "center", 
    flexDirection: "row",
    marginTop: 24,
    paddingHorizontal: 16
  }
});
