import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    height: 173,
    backgroundColor: '#0D0D0D',
  },
  logo: {
    marginTop: 72,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -54,
    marginBottom: 12,
    padding: 24
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    marginRight: 7
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  counter: {
    flexDirection: 'row',
  },
  created: {
    marginRight: 12,
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  number: {
    color: '#D9D9D9',
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 14,
  }
});