import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const App = () => {
  return (
    <>
      <Text>App Screen</Text>

      <Icon
        name = "add-circle-outline"
        color = "red"
        size={ 100 }
      />
    </>
  )
}

export default App