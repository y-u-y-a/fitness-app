import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { HomeStackList } from '../../types'
import { useQueryTrainingList } from '../../hooks/useQuery'
import Presenter from './presenter'

type Props = {
  navigation: StackNavigationProp<HomeStackList, 'Home'>
}

// From HomeStackNavigator.
export const HomeScreen: React.FC<Props> = ({ navigation }): JSX.Element => {
  const todayTraining = {
    title: '胸・背中の日',
    menu: useQueryTrainingList(),
  }
  //
  return <Presenter todayTraining={todayTraining} />
}
