import { useState } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import Trash from '../../../assets/trash.svg'

import { styles } from "./styles";

export function ToDoList() {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Checkbox 
                style={styles.checkbox} 
                value={isChecked} 
                onValueChange={setChecked} 
                color={isChecked ? '#5E60CE' : undefined}
            />
            <Text style={styles.task}>
                Integer urna interdu massa libero auctor neque turpis turpis semper.
            </Text>
            <TouchableOpacity style={styles.trash}>
                <Trash />
            </TouchableOpacity>
        </View>
    )
}