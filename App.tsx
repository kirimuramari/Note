import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { commonStyles } from "./style/style";

export default function App() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>タイトル</Text>
      <ScrollView contentContainerStyle={commonStyles.container}>
        <Text style={commonStyles.text}>コンテンツ</Text>
          <View style={styles.row}>
            <Link href="component/add" asChild>
              <TouchableOpacity style={styles.button}>
              <Text style={commonStyles.buttonText}>登録</Text>
              </TouchableOpacity>
            </Link>
          <TouchableOpacity style={styles.button}>
          <Text style={commonStyles.buttonText}>確認</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  row:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center"
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

});
