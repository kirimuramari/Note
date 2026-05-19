import { useState,useEffect } from "react";
import { Modal, View,Text,TouchableOpacity,TextInput,Alert } from "react-native";
import { Form } from "@/type/type";
import { supabase } from "@/lib/supabase";
import { SnackbarType } from "../form/AppSnackbar";

type Props = {
    visible: boolean;
    note: Form | null;
    onClose: () => void;
    onSaved:() => void;
    showSnackbar: (
        message: string,
        type: SnackbarType
    ) => void;
};

export default function NoteDetailModal({
    visible,
    note,
    onClose,
    onSaved,
    showSnackbar
}:Props) {
    const [isEditing,setIsEditing] = useState(false);
    const [editName,setEditName] = useState("");
    const [editNumber, setEditNumber] = useState("");
    const [editAmount, setEditAmount] = useState("");

    useEffect(() => {
        if (!note) return;

        setEditName(note.name ?? "");
        setEditNumber(note.number?.toString() ?? "");
        setEditAmount(note.amount?.toString() ?? "");
    },[note]);
    if (!note) return null;

    const handleSave = async () => {
        if (!note) return;

        const { error } = await supabase
        .from("Note")
        .update({
            name:editName,
            number:editNumber === "" 
            ? null
            : Number(editNumber),
            amount:editAmount === ""
            ? null
            : Number(editAmount),
            total:editNumber === "" || editAmount === ""
            ? null
            : Number(editNumber) * Number(editAmount),
        })
        .eq("id", note.id);
        
        if (error) {
            showSnackbar("更新に失敗しました", "error");
            return;
            
        }
        onSaved();
        showSnackbar("更新に成功しました", "success");
        setIsEditing(false);
        onClose();  
    };

    const confirmDelete = () => {
        Alert.alert(
            "削除確認",
            "本当に削除しますか？",
            [
                {
                    text: "キャンセル",
                    style: "cancel"
                },
                {
                    text: "削除",
                    style:"destructive",
                    onPress: handleDelete,
                }
            ]
        );
    };

        const handleDelete = async() => {
                    if (!note) return;
 const { error } = await supabase
        .from("Note")
        .delete()
        .eq("id",note.id);

        if (error) {
            console.error(error);

            showSnackbar("削除に失敗しました", "error");
            return;
        }
        onSaved();
        showSnackbar("削除しました", "success");
        onClose();    
    
        };
        return (
            <Modal 
            visible={visible}
            transparent
            animationType="slide"
            >
                <View>
                    {!isEditing && (
                    <View>
                        <Text>{note.name}</Text>
                        <Text>{note.number}円</Text>
                        <Text>{note.amount}個</Text>
                        <Text>{note.total}円</Text>
                        <Text>{note.total}円</Text>
                        <TouchableOpacity
                            onPress={() =>
                                setIsEditing(true)
                            }
                        >
                            <Text>編集</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={
                            confirmDelete

                        }
                        >
                            <Text>削除</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose}>
                            <Text>閉じる</Text>
                        </TouchableOpacity>
                    </View>
    
                    )}
                    {isEditing && (
                        <View>
                            <TextInput
                            value={editName}
                            onChangeText={setEditName}
                            />
                            <TextInput
                            value={editNumber}
                            onChangeText={setEditNumber}
                            keyboardType="numeric"
                            />
                            <TextInput
                            value={editAmount}
                            onChangeText={setEditAmount}
                            keyboardType="numeric"
                            />
                           
                        <TouchableOpacity
                            onPress={() =>
                                setIsEditing(false)
                            }
                        >
                            <Text>キャンセル</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={handleSave}>
                            <Text>保存</Text>
                        </TouchableOpacity>
                        </View>
                    )}
                </View>
            </Modal>
        )
    }

