import { View, FlatList, TouchableOpacity, Text, TextInput, useAnimatedValue, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Resume } from '../../components/Resume';
import { List } from '../../components/List';


export type TaskProps = {
  id: number;
  text: string;
  isChecked: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskText, setTaskText] = useState('')

  
  function handleAddTask() {
    if (!taskText) {
      Alert.alert('⚠️ Alerta!', 'Esse campo não pode estar vazio.')
      return
    } 

    const newTask: TaskProps = {
      id: Date.now(),
      text: taskText,
      isChecked: false
    }

    setTasks(oldTasks => [...oldTasks, newTask]);
    setTaskText('')
  }
  
  function toggleTaskCheck(taskIdToBeChecked: number) {}
  
  function removeTask(taskIdToBeRemoved: number) {}
  
  return (
    <View >
      <Header />
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setTaskText}
          value={taskText}
        />    
        <TouchableOpacity 
          style={styles.button}
          onPress={handleAddTask}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Resume />
      
      <List 
        data={tasks}
        removeTask={removeTask}
        toggleTaskCheck={toggleTaskCheck}
      />
      
    </View>
  )  
}