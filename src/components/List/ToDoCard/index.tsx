import { useEffect, useState } from "react";
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

  function handleRemoveTask() {
    removeTask(item.id)
  }

  function handleToggleTaskCheck() {
    toggleTaskCheck(item.id);
  }

  useEffect(() => {
    handleToggleTaskCheck()
  }, [isChecked])

  return (
    <View style={styles.container}>
      <Checkbox 
        style={styles.uncheck} 
        value={isChecked} 
        onValueChange={setChecked} 
        color={isChecked ? '#5E60CE' : undefined}
      />
      <Text style={isChecked ? styles.check : styles.task } numberOfLines={2}>
        {item.text}
      </Text>
      <TouchableOpacity style={styles.trash} onPress={handleRemoveTask}>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}
        