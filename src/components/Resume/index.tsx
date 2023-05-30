import { View, Text } from "react-native";
import { styles } from "./style";

export function Resume() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.tagLeft}>Criadas</Text>
        <Text style={styles.counter}>5</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.tagRight}>Concluídas</Text>
        <Text style={styles.counter}>2</Text>
      </View>
    </View>
  )
}