import { View, Text, StyleSheet,ScrollView,TouchableOpacity,TextInput } from "react-native";

export  function addForm() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
            <Text style={styles.text}>タイトル</Text>
        </View>
        <View>
            <Text>商品名</Text>
            <TextInput/>
            <Text>金額</Text>
            <TextInput/>
            <Text>円</Text>
            <Text>個数</Text>
            <TextInput/>
            <Text>個</Text>
            <Text>合計</Text>
            <TextInput/>
            <Text>円</Text>
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