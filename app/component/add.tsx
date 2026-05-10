import {useState} from "react";
import { View, Text, StyleSheet,ScrollView,TouchableOpacity,TextInput } from "react-native";
import { commonStyles } from "../../style/style";

export default function Add() {
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

const handleRegister = () => {
    const isValid = validate();
    if (!isValid) {
        return;
    }
    console.log("登録可能");
    
};

return (
    <View>
        <ScrollView contentContainerStyle={commonStyles.container}>
        <View style={commonStyles.container}>
            <Text style={commonStyles.text}>タイトル</Text>
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



<View>
    <TouchableOpacity style={style.button} onPress={handleRegister}>
        <Text style={commonStyles.buttonText}>登録する</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.cancelButton}>
        <Text style={commonStyles.buttonText}>キャンセル</Text>
    </TouchableOpacity>
</View>
        </ScrollView>
    </View>
)
}
const style = StyleSheet.create({
    button:{
        backgroundColor:"#3b82f6",
        paddingVertical:10,
        paddingHorizontal:16,
        borderRadius:6,
        marginTop:5,
        marginBottom:5,
        width:"auto",
        alignSelf:"flex-start"
    },
    cancelButton:{
        flex:1,
        backgroundColor:"#d1d5db",
        paddingVertical:10,
        paddingHorizontal:16,
        borderRadius:6,
        marginTop:5,
        marginBottom:5,
        width:"auto",
        alignSelf:"flex-start"
    },
    
})