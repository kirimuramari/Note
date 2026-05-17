import { useEffect, useState } from "react";
import { View,FlatList } from "react-native";
import { supabase } from "../../lib/supabase";
import { groupByDate,DateGroup } from "./utils/groupByDate";
import { commonStyles } from "../../style/style";
import DateGroupItem from "./List/DateGroupItem";
import NoteDatailModal from './List/NoteDetailModal';
import { Form } from "@/type/type";


export default function List(){
    const [groupedNotes, setGroupedNotes] = useState<DateGroup[]>([]);
    const [openDates, setOpenDates] = useState<string[]>([]);
    const [selectedNote,setSelectedNote] = useState<Form | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const handleOpenNote = (note: Form) => {
           setSelectedNote(note);
           setIsModalVisible(true);
       };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedNote(null);
    };

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

    const toggleDate = (date: string) => {
        setOpenDates((prev) =>
        prev.includes(date)
        ? prev.filter((d) => d !== date)
        : [...prev, date]
    );
    };

    return (
        <View>
            <FlatList
            style={commonStyles.FlatList}
            data={groupedNotes}
            keyExtractor={(item) => item.date}
            renderItem={({item}) => (
            <DateGroupItem
            date={item.date}
            items={item.items}
            isOpen={openDates.includes(item.date)}
            onToggle={() =>
                toggleDate(item.date)
            }
            onPressNote={handleOpenNote}
        />
    )}
    />
    <NoteDatailModal
    visible={isModalVisible}
    note={selectedNote}
    onClose={handleCloseModal}
    />
    </View>
    );
}