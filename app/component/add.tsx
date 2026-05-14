import { supabase } from "../../lib/supabase";
import {useState} from "react";
import { View, Text, StyleSheet,ScrollView,TouchableOpacity,TextInput } from "react-native";
import { commonStyles } from "../../style/style";
import AppSnackbar, { SnackbarType } from "./form/AppSnackbar";

export default function Add() {
    const [name,setName] = useState("");
    const [amount,setAmount] = useState("");
  const [number,setNumber] = useState("");
    const total = Number(amount) * Number(number); 
  const [error, setError] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState<SnackbarType>("success");

const showSnackbar = (
    message:string,
    type:SnackbarType
) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarVisible(true);
};

  const validate = () => {
    if (!name.trim()) {
      showSnackbar("商品名を入力してください","error");
      return false;
    }
    if (Number(amount) <= 0) {
      showSnackbar("金額は1円以上です","error");
      return false;
    }
    if (Number(number) <= 0) {
      showSnackbar("個数は１以上です","error");
      return false;
    }
    setError("");
    return true;
  };

const handleRegister = async() => {
    const isValid = validate();
    if (!isValid) {
        return;
    }
    const {error} = await supabase
    .from("Note")
    .insert([
        {
        name:name,
        amount:Number(amount),
        number:Number(number),
        total:total,
    },
    ]);
    if (error) {
        showSnackbar("登録に失敗しました","error");
        console.error(error);
        return;
    }
    showSnackbar("登録に成功しました","success");
    setName("");
    setAmount("");
    setNumber("");
};

return (
    <View>
        <ScrollView contentContainerStyle={commonStyles.container}>
        <View style={commonStyles.container}>
            <Text style={commonStyles.text}>タイトル</Text>
        </View>

        <View>
		<Text style={style.Text}>商品名</Text>
            <TextInput  value={name} onChangeText={setName} style={style.TextInput}/>
                <Text style={style.Text}>金額</Text>
            <View style={style.row}>
                    <TextInput  value={amount} onChangeText={setAmount} style={style.TextInput}/>
                    <Text style={style.fontSize}>円</Text>
            </View>
            <Text style={style.Text}>個数</Text>
            <View style={style.row}>
            <TextInput  value={number} onChangeText={setNumber} style={style.TextInput}/>
            <Text style={style.fontSize}>個</Text>

            </View>
            <Text style={style.Text}>合計:{total}円</Text>
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
<AppSnackbar
    visible={snackbarVisible}
    message={snackbarMessage}
    onDismiss={() => setSnackbarVisible(false)}
    type={snackbarType}
/>
    </View>

)
}
const style = StyleSheet.create({
    TextInput:{
        borderWidth:2,
        borderColor:"#d1d5db",
        borderRadius:8,
        padding:10,
        marginBottom:15,
        fontSize:16,
        width:"auto",
        alignSelf:"flex-start"
    },
    Text:{
        fontSize:18,
    },
     row:{
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-end",
  },
  fontSize:{
    fontSize:18
  },
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
