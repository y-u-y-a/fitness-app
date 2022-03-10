import React, { VFC } from 'react'
import { ScrollView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../../themes'
import { AppStackList } from '../../types/navigator'
import { useQueryDayTrainingMenu, useQueryNewsList } from '../../hooks/useQuery'
import { Calendar, DayTrainingMenu, News } from '../../components'

interface Props {
  navigation: StackNavigationProp<AppStackList, 'WebView'>
}

// From HomeStackNavigator.
export const HomeScreen: VFC<Props> = ({ navigation }) => {
  const dayTrainingMenu = useQueryDayTrainingMenu()
  const newsList = useQueryNewsList()
  //
  return (
    <ScrollView style={{ backgroundColor: themes.colors.white }}>
      <Calendar style={{ marginBottom: 20 }} />
      <DayTrainingMenu dayTrainingMenu={dayTrainingMenu} />
      <View style={{ marginBottom: 40 }}>
        {newsList.map(({ title, date, uri }, i) => (
          <News title={title} date={date} onPress={() => navigation.navigate('WebView', { uri })} key={i} />
        ))}
      </View>
    </ScrollView>
  )
}
