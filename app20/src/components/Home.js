import React, { useEffect, useState } from "react";
import { Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../api/api";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    api
      .get()
      .then((res) => {
        setFilmes(res.data);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false &&
        filmes.map((filme) => {
          return (
            <View
              key={filme.id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 6,
                paddingHorizontal: 16,
              }}
            >
              <Text>{filme.nome}</Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("Detalhes", { filme: filme });
                }}
              >
                <Text style={{ color: "blue" }}>Saiba mais</Text>
              </Pressable>
            </View>
          );
        })}
    </>
  );
}
