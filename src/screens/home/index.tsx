import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, Alert, FlatList } from 'react-native'
import { styles } from './styles'
import Logo from '../../assets/Logo.svg'
import Add from '../../assets/add.svg'
import { Task } from '../../components'


export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')

  function handleTaskAdd(){
    if(tasks.includes(taskName)){
      return Alert.alert('Tarefa existe', 'Já existe uma tarefa na lista.')
    }
    setTasks(prevState => [...prevState, taskName])
    setTaskName('')
  }

  function handleTaskRemove(name: string){
    Alert.alert('Remover', `Remover a tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
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
            <TouchableOpacity style={styles.button}
              onPress={handleTaskAdd}>
              <Add width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.counter}>
              <Text style={styles.created}>
                Criadas
              </Text>
              <Text style={styles.number}>
                0
              </Text>
            </View>
            <View style={styles.done}>
              <Text style={styles.completed}>
                Concluídas
              </Text>
              <Text style={styles.number}>
                0 de 0
              </Text>
            </View>
          </View>
          <FlatList
            data={tasks}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Task
                key={item}
                name={item}
                onRemove={() => handleTaskRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={{ alignItems: 'center', marginTop: 64 }}>
                <Text
                  style={{ fontWeight: 'bold', color: '#808080' }}>
                  Você ainda não tem tarefas cadastradas</Text>
                  <Text style={{ color: '#808080' }}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
              </View>
          )}
          />
      </View> 
    </>
  )
}