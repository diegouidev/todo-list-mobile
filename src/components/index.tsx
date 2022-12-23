import { useState } from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import Trash from '../assets/trash.svg'
import { styles } from "./style"
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

interface Tafs {
  description: string,
  onRemove: () => void,
  count: (arg1: string) => void,
}

export function Task({ description, onRemove, count }: Tafs){
  const [icontrueOrFalse, setIcontrueOrFalse] = useState(false);

    function handleChecked() {
        setIcontrueOrFalse(!icontrueOrFalse);
        count(description);
    }
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardButton}
        onPress={handleChecked}
      >
      {icontrueOrFalse === true ?
        (<AntDesign name="checkcircle" size={24} color="#4EA8DE" />)
          :
        (<Entypo name="circle" size={24} color="#4EA8DE" />)}
      </TouchableOpacity>
      <Text style={styles.name}>
        {/* {name} */}
      </Text>
      <TouchableOpacity style={styles.button} > 
          <Trash
            onPress={onRemove}
          />
        </TouchableOpacity>
    </View>
  )
}