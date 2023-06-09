import { StatusBar, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View style={{backgroundColor: '#191919', flex: 1}}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </View>
  );
}

