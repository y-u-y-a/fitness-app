import React, { VFC } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'

import { SettingsNavigator } from '../../types/navigator'
import style from './style'

type Props = {
  navigation: StackNavigationProp<SettingsNavigator>
}

export const SettingsScreen: VFC<Props> = ({ navigation }) => {
  const pageList = [
    { title: 'プロフィール', onPress: () => navigation.navigate('ProfileScreen') },
    { title: 'カレンダー設定', onPress: () => alert('') },
    { title: 'ヘルプ・よくある質問', onPress: () => alert('') },
    { title: 'プライバシーポリシー', onPress: () => alert('') },
    { title: 'ログアウト', onPress: () => alert('') },
  ]
  //
  return (
    <View style={style.container}>
      {pageList.map(({ title, onPress }, i) => (
        <TouchableOpacity onPress={onPress} style={style.item} key={i}>
          <Text style={style.text}>{title}</Text>
          <MaterialIcons name="keyboard-arrow-right" style={style.icon} />
        </TouchableOpacity>
      ))}
    </View>
  )
}
