import { Modal, View,Text,TouchableOpacity } from "react-native";
import { Form } from "@/type/type";

type Props = {
    visible: boolean;
    note: Form | null;
    onClose: () => void;
};

export default function NoteDetailModal({
    visible,
    note,
    onClose,
}:Props) {
    if (!note) return null;

    return (
        <Modal 
        visible={visible}
        transparent
        animationType="slide"
        >
            <View>
                <View>
                    <Text>{note.name}</Text>
                    <Text>{note.number}円</Text>
                    <Text>{note.amount}個</Text>
                    <Text>{note.total}円</Text>
                    <TouchableOpacity>
                        <Text>編集</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>削除</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose}>
                        <Text>閉じる</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}