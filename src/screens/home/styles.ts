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
    marginBottom: 42,
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
});