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
  // TODO: 昨日としては不要なので削除する
  const handleInsertNews = async () => {
    const params = {
      title: '今日は雨ですです。',
      content: '深夜のテストです。テストです。',
    }
    await insertNewsOne(params)
  }
  const handleDeleteNews = async (id: string) => {
    await deleteNews({ id })
    return
  }
  //
  return (
    <ScrollView style={{ backgroundColor: themes.colors.white }}>
      <Calendar wrapStyle={{ marginBottom: 20 }} />
      <DayTrainingMenu dayTrainingMenu={dayTrainingMenu} wrapStyle={{ marginBottom: 20 }} />
      {newsList && (
        <View style={{ marginBottom: 40 }}>
          {newsList.map(({ id, title, createdAt }, i) => (
            <News id={id} title={title} createdAt={createdAt} updateNews={handleDeleteNews} key={i} />
          ))}
        </View>
      )}
    </ScrollView>
  )
}
