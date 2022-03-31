import React, { VFC } from 'react'
import { ScrollView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../../themes'
import { AppNavigator } from '../../types/navigator'
import { useAppState } from '../../hooks/useAppState'
import { useNewsMutation } from '../../hooks/useNewsApi'
import { Calendar, DayTrainingMenu, News } from '../../components'

type Props = {
  navigation: StackNavigationProp<AppNavigator, 'WebView'>
}

export const HomeScreen: VFC<Props> = ({ navigation }) => {
  const { newsList, dayTrainingMenu } = useAppState()
  const { insertNewsOne, deleteNews } = useNewsMutation()

  const handleUpdateNews = async (uuid: string) => {
    const params = {
      title: '今日は雨ですです。',
      content: '深夜のテストです。テストです。',
    }
    // TODO: insert後データがロードされない...
    // await insertNewsOne(params)
    await deleteNews({ uuid })
    return
  }
  //
  return (
    <ScrollView style={{ backgroundColor: themes.colors.white }}>
      <Calendar wrapStyle={{ marginBottom: 20 }} />
      <DayTrainingMenu dayTrainingMenu={dayTrainingMenu} wrapStyle={{ marginBottom: 20 }} />
      {newsList && (
        <View style={{ marginBottom: 40 }}>
          {newsList.map(({ uuid, title, createdAt }) => (
            <News uuid={uuid} title={title} createdAt={createdAt} updateNews={handleUpdateNews} key={uuid} />
          ))}
        </View>
      )}
    </ScrollView>
  )
}
