import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
    marginLeft: 24,
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