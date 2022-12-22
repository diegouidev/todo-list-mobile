import { View, Text, StatusBar } from 'react-native'
import { styles } from './styles' 


export function Home() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Olá Mundo!</Text>
    </View>
  )
}