import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  head: {
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30
  },
  titleto: {
    color: '#4EA8DE',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10
  },
  titledo: {
    color: '#5E60CE',
    fontSize: 40,
    fontWeight: 'bold'
  }, 
  body: {
    backgroundColor: '#333333',
    flex: 1,
  }, 
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
    color: '#808080',
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