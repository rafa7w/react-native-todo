import { Text, View } from "react-native";
import { styles } from "./styles";
import Clipboard from '../../../assets/clipboard.svg'

export function ListEmpty() {
    return (
        <View style={styles.container}>
            <Clipboard style={{marginBottom: 16}}/>
            <Text style={{fontWeight: 'bold', color: '#808080'}}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{color: '#808080'}}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}