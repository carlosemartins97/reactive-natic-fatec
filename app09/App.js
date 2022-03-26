import { StyleSheet, Text, View, ScrollView } from 'react-native';
import JobCard from './components/JobCard';

export default function App() {

  const job = [
    {title: 'Dev Front', description: 'lorem ipsum dolor met', salario: 'R$ 3.900', contato: '(13) 9 9999-9999'},
    {title: 'Dev Back', description: 'lorem ipsum dolor met', salario: 'R$ 4.900', contato: '(13) 9 9999-9999'},
    {title: 'Devops', description: 'lorem ipsum dolor met', salario: 'R$ 5.900', contato: '(13) 9 9999-9999'},
    {title: 'Product Owner', description: 'lorem ipsum dolor met', salario: 'R$ 10.900', contato: '(13) 9 9999-9999'},
    {title: 'Especialista em BD', description: 'lorem ipsum dolor met', salario: 'R$ 2.900', contato: '(13) 9 9999-9999'},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flex}>
          {
            job.map((card, index) => (
              <JobCard 
                key={index}
                title={card.title}
                description={card.description}
                salario={card.salario}
                contato={card.contato}
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
    marginVertical: 64,
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
    marginTop: 24,
    paddingHorizontal: 16
  }
});
