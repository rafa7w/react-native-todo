import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20
  },
  tagLeft: {
    fontWeight: 'bold',
    color: '#4EA8DE',
  },
  tagRight: {
    fontWeight: 'bold',
    color: '#5E60CE',
  }, 
  counter: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10
  }
})