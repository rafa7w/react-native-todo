import { View, Text, Image, TextInput} from 'react-native';
import { styles } from './styles'

export function Home() {
  return (
    <View >
      <View style={styles.head}>
        <View style={styles.title}>
          <Image source={require('../../assets/rocket.png')}/>
          <Text style={styles.titleto}>to</Text>
          <Text style={styles.titledo}>do</Text>
        </View>
      </View>

      <TextInput />
    </View>
  )  
}