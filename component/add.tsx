import { View, Text, StyleSheet,ScrollView,TouchableOpacity,TextInput } from "react-native";
import { addForm } from "./addForm";
import { commonStyles } from "../style/style";

export default function Add() {
return (
    <View>
        <ScrollView contentContainerStyle={commonStyles.container}>
        <View style={commonStyles.container}>
            <Text style={commonStyles.text}>タイトル</Text>
        </View>
<addForm />
<View>
    <TouchableOpacity>
        <Text>登録する</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text>キャンセル</Text>
    </TouchableOpacity>
</View>
        </ScrollView>
    </View>
)
}