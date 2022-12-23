import { View, Text, TouchableOpacity } from "react-native"
import Trash from '../assets/trash.svg'
import { styles } from "./style"

type Props = {
  name: string
  onRemove: () => void
}

export function Task({ name, onRemove }: Props){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} > 
          <Trash
            width={40}
            height={40}
            onPress={onRemove}
          />
        </TouchableOpacity>
    </View>
  )
}