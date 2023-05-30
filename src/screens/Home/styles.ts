import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    borderRadius: 5,
    color: '#f0f0f0',
    padding: 16,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 10
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  }
})