import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { Resume } from '../../components/Resume';
import { ToDoList } from '../../components/ToDoList';
// import { ListEmpty } from '../../components/ListEmpty';

export function Home() {
  return (
    <View >
      <Header />
      <Form />

      <Resume />
      <ToDoList />
      <ToDoList />
    </View>
  )  
}