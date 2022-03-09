import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { HomeStackList } from '../../types/navigator'
import { useQueryTrainingList } from '../../hooks/useQuery'
import Presenter from './presenter'

interface Props {
  navigation: StackNavigationProp<HomeStackList, 'Home'>
}

// From HomeStackNavigator.
export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const todayTraining = {
    title: '胸・背中の日',
    menu: useQueryTrainingList(),
  }
  const newsList = [
    {
      description: 'お知らせテスト1111',
      onPress: () => navigation.navigate('WebView', { uri: 'https://github.com/' }),
    },
    {
      description: 'お知らせテスト2222',
      onPress: () => navigation.navigate('WebView', { uri: 'https://github.com/y-u-y-a' }),
    },
  ]
  //
  return <Presenter todayTraining={todayTraining} newsList={newsList} />
}
