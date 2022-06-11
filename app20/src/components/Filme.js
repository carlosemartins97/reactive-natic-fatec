import React, { useEffect } from "react";
import { Text, Image } from "react-native";

export default function Filme({ route }) {
  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <>
      <Text>Detalhes sobre o filme: {route.params?.filme.nome};</Text>
      <Image source={route.params?.filme.foto} style={{ flex: 1 }} />
      <Text>{route.params?.filme.sinopse}</Text>
    </>
  );
}
