import { View, Text } from "react-native";
import { styles } from "./style";
import { TaskProps } from "../../screens/Home";

type Props = {
  data: TaskProps[];
}

export function Resume({data}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.tagLeft}>Criadas</Text>
        <Text style={styles.counter}>{data.length}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.tagRight}>Concluídas</Text>
        <Text style={styles.counter}>{}</Text>
      </View>
    </View>
  )
}