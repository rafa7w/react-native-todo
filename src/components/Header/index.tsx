import { View } from "react-native";
import { Logo } from "../Logo";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.head}>
      <Logo />    
    </View>
  )
}
