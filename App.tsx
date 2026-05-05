import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>タイトル</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>コンテンツ</Text>
          <View style={styles.row}>
            <Link href="component/add">
              <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>登録</Text>
              </TouchableOpacity>
            </Link>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>確認</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center"
  },
  text:{
    fontSize:20,
    color:"#747575",
    marginTop:20,
    marginBottom:10,
  },
  button:{
    backgroundColor:"#eee",
    width:100,
    height:100,
    borderRadius:12,
    margin:10,
    justifyContent:"center",
    alignItems:"center",
    boxShadow:"0 2px 4px rgba(0,0,0,0.1)",
    cursor:"pointer",
  },
  buttonText:{
    textAlign:"center",
  }
});
