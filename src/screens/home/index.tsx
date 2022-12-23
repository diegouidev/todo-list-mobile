import { View, TextInput, TouchableOpacity} from 'react-native'
import { styles } from './styles'
import Logo from '../../assets/Logo.svg'
import Add from '../../assets/add.svg'


export function Home() {
  return (
    <>
      <View style={styles.container}>
          <View style={styles.header}>
            <Logo style={styles.logo}/>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor="#6b6b6b"
            />

            <TouchableOpacity style={styles.button}>
              <Add width={20} height={20} />
            </TouchableOpacity>
          </View>
      </View> 
    </>
  )
}