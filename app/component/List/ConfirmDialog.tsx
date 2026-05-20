import {  View, Text,TouchableOpacity,StyleSheet } from "react-native";

type Props = {
    visible: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?:string;

    onConfirm: () => void;
    onCancel: () => void;
};
export default function ConfirmDialog({
    visible,
    title,
    message,
    confirmText = "OK",
    cancelText = "キャンセル",
    onConfirm,
    onCancel,
}: Props) {
    return (
    
                <View style={styles.main}>
                    <View style={styles.container}>
                        <Text>{title}</Text>
                        <Text>{message}</Text>
                        <TouchableOpacity
                        onPress={onConfirm}
                        >
                            <Text>{confirmText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={onCancel}
                        >
                            <Text>{cancelText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
      
    );
    
}
const styles = StyleSheet.create({
    main :{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent:"center",
        alignItems:"center",
        zIndex:999,
    },
    container:{
        width:"80%",
        padding:20,
        borderRadius:12,
    }
})