import { TextInput, View } from "react-native"
import { Button } from "../Button"
import { styles } from "./styles"

export function Form() {
  return (
    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
      />    
      <Button />
    </View>
  )
}