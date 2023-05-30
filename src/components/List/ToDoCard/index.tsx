import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from './style';
import Checkbox from 'expo-checkbox';
import Trash from '../../../../assets/trash.svg'
import { TaskProps } from "../../../screens/Home";

type Props = {
  item: TaskProps;
  removeTask: (taskIdToBeRemoved: number) => void;
  toggleTaskCheck: (taskIdToBeChecked: number) => void;
}

export function ToDoCard({ item, removeTask, toggleTaskCheck }: Props) { 
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox 
        style={styles.checkbox} 
        value={isChecked} 
        onValueChange={setChecked} 
        color={isChecked ? '#5E60CE' : undefined}
      />
      <Text style={styles.task} numberOfLines={2}>
        {item.text}
      </Text>
      <TouchableOpacity style={styles.trash} onPress={() => console.log(item)}>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}
        