import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppStackList } from '../../types/navigator'

import style from './style'

interface Props {
  navigation: StackNavigationProp<AppStackList>
}

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const onPress = () => navigation.goBack()
  //
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={style.text}> This is settings page.</Text>
      </TouchableOpacity>
    </View>
  )
}
