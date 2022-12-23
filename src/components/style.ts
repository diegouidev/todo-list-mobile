import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 24
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16

  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardButton: {

    width: 50,
    height: 64,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardButton2: {
      position: 'absolute',
      right: 0,
      width: 50,
      height: 64,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
  }
})