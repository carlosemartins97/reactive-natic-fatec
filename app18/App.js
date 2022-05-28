import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import {useState, useEffect} from 'react';
import api from './src/api/api';

export default function App() {
  const [img, setImg] = useState();
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  function handleSearch() {
    api.get(user).then(res => {
      manageData(res.data);
    }).catch(e => console.log(e));
  }

  function manageData(data) {
    const userObj = {
      img: data.avatar_url,
      id: data.id,
      name: data.name,
      repositories: data.public_repos,
      created_at: data.created_at,
      followers: data.followers,
      following: data.following
    }

    setImg(data.avatar_url);
    setProfile(userObj);

  }

  useEffect(() => {
    console.log(profile)
  }, [profile])


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>Perfil dos devs</Text>

      {
         profile && (
          <View style={{marginTop: 16}}>
            <Image source={profile.img} style={{width: 200, height: 200, borderRadius: 200}}/>
          </View>
         )
      }
      

      <View style={{marginVertical: 32}}>
        <View style={{backgroundColor: '#ddd', borderWidth: 1, borderColor: 'black'}}>
          <TextInput onChange={e => setUser(e.target.value)} style={{padding: 8}} placeholder="Digite um perfil"/>
        </View>
        <Pressable style={{backgroundColor: 'green', paddingVertical: 12, justifyContent: 'center', alignItems: 'center'}} onPress={handleSearch}>
          <Text style={{color: 'white', justifyContent: 'center', alignItems: 'center'}}>
            Buscar
          </Text>
        </Pressable>
      </View>

      {
        profile && (
          <View>
            <Text>ID: {profile.id}</Text>
            <Text>Nome: {profile.name}</Text>
            <Text>Repositórios: {profile.repositories}</Text>
            <Text>Criado em: {profile.created_at}</Text>
            <Text>Seguidores: {profile.followers}</Text>
            <Text>Seguindo: {profile.following}</Text>
          </View>
        )
      }
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
});
