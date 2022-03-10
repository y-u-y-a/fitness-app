import React from 'react'
import { ScrollView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../../themes'
import { AppStackList } from '../../types/navigator'
import { useQueryNewsList, useQueryTrainingList } from '../../hooks/useQuery'
import { Calendar, DayTraining, NewsList } from '../../components'

interface Props {
  navigation: StackNavigationProp<AppStackList, 'WebView'>
}

// From HomeStackNavigator.
export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dayTraining = {
    title: '胸・背中の日',
    menu: useQueryTrainingList(),
  }

  const newsList = useQueryNewsList().map((item) => {
    console.log(item.uri)
    return {
      title: item.title,
      date: item.date,
      onPress: () => navigation.navigate('WebView', { uri: item.uri }),
    }
  })
  //
  return (
    <ScrollView style={{ backgroundColor: themes.colors.white }}>
      <Calendar style={{ marginBottom: 20 }} />
      <DayTraining dayTraining={dayTraining} />
      <NewsList newsList={newsList} />
    </ScrollView>
  )
}
