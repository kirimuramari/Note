import { useEffect, useState } from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { commonStyles } from "@/style/style";
import { formatMonthDay } from "../utils/formatDate";
import { Form } from "@/type/type";

type Props ={
    date:string;
    items:Form[];
    isOpen:boolean;
    onToggle:() => void;
    onPressNote:(note:Form) => void;
};

export default function DateGroupItem({
    date,
    items,
    isOpen,
    onToggle,
    onPressNote,
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
                                    <TouchableOpacity
                                    onPress={() => onPressNote(note)}
                                    >
                                    <Text style={commonStyles.text}>
                                        {note.name}
                                    </Text>
                                  
                                    </TouchableOpacity>
                                </View>

                            ))}
                        </View>
                    )}
                    </View>
    );
}