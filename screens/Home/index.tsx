import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.body}>
      <View style={styles.head}>
        <View style={styles.title}>
          <Image source={require('../../assets/rocket.png')}/>
          <Text style={styles.titleto}>to</Text>
          <Text style={styles.titledo}>do</Text>
        </View>
      </View>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )  
}