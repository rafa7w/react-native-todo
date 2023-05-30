import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { Resume } from '../../components/Resume';

export function Home() {
  return (
    <View >
      <Header />
      <Form />

      <Resume />
    </View>
  )  
}