import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import api from "./src/api/api";

export default function App() {
  const [de, setDe] = useState("usd");
  const [para, setPara] = useState("real");

  const [usdAsk, setUsdAsk] = useState();
  const [eurAsk, setEurAsk] = useState();
  const [btcAsk, setBtcAsk] = useState();

  const real = 1;

  const [valor, setValor] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    api
      .get("USD-BRL")
      .then((res) => {
        setUsdAsk(res.data.USDBRL.ask);
      })
      .catch((e) => console.log(e));

    api
      .get("EUR-BRL")
      .then((res) => {
        setEurAsk(res.data.EURBRL.ask);
      })
      .catch((e) => console.log(e));

    api
      .get("BTC-BRL")
      .then((res) => {
        setBtcAsk(res.data.BTCBRL.ask);
      })
      .catch((e) => console.log(e));
  }, []);

  function handleConvert() {
    convert(de);
  }

  function convert(de) {
    if (de === "usd") {
      setResult((valor * usdAsk).toFixed(2));
    } else if (de === "btc") {
      setResult((valor * btcAsk).toFixed(2));
    } else if (de === "euro") {
      setResult((valor * eurAsk).toFixed(2));
    } else {
      setResult(valor);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Conversor de moeda</Text>
      <View>
        <Text>Valor</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid",
            paddingHorizontal: 4,
          }}
          onChange={(e) => {
            setValor(e.target.value);
          }}
          placeholder="Insira um valor"
        />
      </View>

      <View style={{ minWidth: 168 }}>
        <Text>De: </Text>
        <Picker
          selectedValue={de}
          onValueChange={(itemValue) => {
            setDe(itemValue);
          }}
          enabled={true}
        >
          <Picker.Item label="dolar" value="usd" />
          <Picker.Item label="euro" value="euro" />
          <Picker.Item label="bitcoin" value="btc" />
        </Picker>
      </View>

      <View style={{ minWidth: 168 }}>
        <Text>Para: </Text>
        <Picker
          selectedValue={para}
          onValueChange={(itemValue) => {
            setPara(itemValue);
          }}
          enabled={true}
        >
          <Picker.Item label="real" value="real" />
        </Picker>
      </View>

      {result && <Text>Resultado: {result}</Text>}

      <Pressable onPress={handleConvert}>
        <Text>Converter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
