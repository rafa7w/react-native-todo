import { View, Text } from "react-native"
import { styles } from "./styles"
import Svg from '../../../assets/rocket.svg'

export function Logo() {
  return (
    <View style={styles.title}>
      <Svg style={{marginTop: 8}}/>
      <Text style={styles.titleto}>to</Text>
      <Text style={styles.titledo}>do</Text>
    </View>
  )
}