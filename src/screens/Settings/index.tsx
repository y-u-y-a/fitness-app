import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RootStackParamList } from '../../types'

import style from './style'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>
}

export const SettingsScreen: React.FC<Props> = ({ navigation }): JSX.Element => {
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