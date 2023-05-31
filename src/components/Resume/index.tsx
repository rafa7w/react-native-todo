import { View, Text } from "react-native";
import { styles } from "./style";
import { TaskProps } from "../../screens/Home";

type Props = {
  data: TaskProps[];
}

export function Resume({data}: Props) {
  const doneTasks = data.filter(task => task.isChecked)
  const doneTasksCount = doneTasks.length

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.tagLeft}>Criadas</Text>
        <Text style={styles.counter}>{data.length}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.tagRight}>Concluídas</Text>
        <Text style={styles.counter}>{doneTasksCount}</Text>
      </View>
    </View>
  )
}