import { useEffect, useState } from "react";
import { View,Text,TouchableOpacity,StyleSheet,FlatList } from "react-native";
import { supabase } from "../../lib/supabase";
import type{ Form } from "../../type/table";
import { formatMonthDay,getDateKey } from "./form/date";
import { commonStyles } from "../../style/style";

type GroupedNotes = {
    [date:string]:Form[];
};

export default function List(){
    const [groupedNotes, setGroupedNotes] = useState<GroupedNotes>({});
    const [openDates, setOpenDates] = useState<string[]>([]);

    useEffect(() => {
        fetchNotes();
    },[]);
    const fetchNotes = async () => {
        const {data,error} = await supabase
        .from("Note")
        .select("*")
        .order("day", {ascending:false});
        if (error) {
            console.error(error);
            return;
        }
        const grouped = groupByDate(data ?? []);
        setGroupedNotes(grouped);
    };
    const groupByDate = (notes:Form[]): GroupedNotes => {
        return notes.reduce((acc,note) => {
            const dateKey = getDateKey(note.day);
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(note);
            return acc;
        }, {} as GroupedNotes);
    };
    const toggleDate = (date: string) => {
        setOpenDates((prev) =>
        prev.includes(date)
        ? prev.filter((d) => d !== date)
        : [...prev, date]
    );
    };

    const dates = Object.keys(groupedNotes);
    return (
 
        <FlatList
        style={commonStyles.FlatList}
        data={dates}
        keyExtractor={(item) => item}
        renderItem={({item:date}) => {
            const isOpen = openDates.includes(date);
          
            
            return (
                <View style={commonStyles.container}>
                    <TouchableOpacity
                    onPress={() => toggleDate(date)}
                    >
                        <Text style={commonStyles.text}>
                            
                            {formatMonthDay(date)} {isOpen ? "▼" : "▶"}
                        </Text>
                    </TouchableOpacity>
                    {isOpen && (
                        <View>
                            {groupedNotes[date].map((note) => (
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
        }}
        />
    );
}