import React, { VFC } from 'react'
import { ScrollView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../../themes'
import { AppNavigator } from '../../types/navigator'
import { useQueryDayTrainingMenu, useQueryNewsList } from '../../hooks/useQuery'
import { Calendar, DayTrainingMenu, News } from '../../components'

interface Props {
  navigation: StackNavigationProp<AppNavigator, 'WebView'>
}

export const HomeScreen: VFC<Props> = ({ navigation }) => {
  const dayTrainingMenu = useQueryDayTrainingMenu()
  const newsList = useQueryNewsList()
  //
  return (
    <ScrollView style={{ backgroundColor: themes.colors.white }}>
      <Calendar wrapStyle={{ marginBottom: 20 }} />
      <DayTrainingMenu dayTrainingMenu={dayTrainingMenu} wrapStyle={{ marginBottom: 20 }} />
      <View style={{ marginBottom: 40 }}>
        {newsList.map(({ title, date, uri }, i) => (
          <News title={title} date={date} onPress={() => navigation.navigate('WebView', { uri })} key={i} />
        ))}
      </View>
    </ScrollView>
  )
}
