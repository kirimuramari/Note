import { View,Text,TouchableOpacity } from "react-native";
import { commonStyles } from "@/style/style";
import { formatMonthDay } from "../utils/formatDate";
import { Form } from "@/type/type";

type Props ={
    date:string;
    items:Form[];
    isOpen:boolean;
    onToggle:() => void;
};

export default function DateGroupItem({
    date,
    items,
    isOpen,
    onToggle,
}:Props) {
    const totalCount = items.length;
    const totalPrice = items.reduce(
                (sum, note) =>
                    sum + (note.total ?? 0),
                0
             );
    return(
        <View style={commonStyles.container}>
            <TouchableOpacity
                onPress={onToggle}
                >
                <Text style={commonStyles.text}>
                    {formatMonthDay(date)}
                            {" "}
                             {isOpen ? "▼" : "▶"}
                        </Text>
                        <Text style={commonStyles.text}>
                            {totalCount}件
                            ¥{totalPrice}
                        </Text>
                    </TouchableOpacity>
                    {isOpen && (
                        <View>
                            {items.map((note) => (
                                <View key={note.id}>
                                    <Text style={commonStyles.text}>
                                        {note.name}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}
                    </View>
    );
}