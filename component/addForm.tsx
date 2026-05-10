import {useState} from "react";
import { View, Text, StyleSheet,ScrollView,TextInput } from "react-native";

export  function addForm() {
	const [name,setName] = useState("");
	const [amount,setAmount] = useState("");
  const [number,setNumber] = useState("");
	const total = Number(amount) * Number(number); 
  const [error, setError] = useState("");
  
  const validate = () => {
    if (!name.trim()) {
      setError("商品名を入力してください");
      return false;
    }
    if (Number(amount) <= 0) {
      setError("金額は1円以上です");
      return false;
    }
    if (Number(number) <= 0) {
      setError("個数は１以上です");
      return false;
    }
    setError("");
    return true;
  };
  
  return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
            <Text style={styles.text}>タイトル</Text>
        </View>
        <View>
            <Text>商品名</Text>
            <TextInput placeholder="商品名" value={name} onChangeText={setName}/>
            <Text>金額</Text>
            <TextInput />
            <TextInput placeholder="金額" value={amount} onChangeText={setAmount}/>
            <Text>円</Text>
            <Text>個数</Text>
            <TextInput placeholder="個数" value={number} onChangeText={setNumber}/>
            <TextInput/>
            <Text>個</Text>
            <Text>合計:{total}円</Text>
        </View>
            
            </ScrollView>
    );
}
    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
    text:{
    fontSize:20,
    color:"#747575",
    marginTop:20,
    marginBottom:10,
  },
  label:{}
});
