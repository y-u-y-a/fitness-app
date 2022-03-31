import React, { VFC } from 'react'
import { ScrollView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../../themes'
import { AppNavigator } from '../../types/navigator'
import { useAppState } from '../../hooks/useNewsQuery'
import { useNewsMutation } from '../../hooks/useNewsMutation'
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
  const handleDeleteNews = async () => {
    await deleteNews({ id: 'f8173a07-a3f8-4d74-b3ca-0ba72e8c7a5f' })
  }

  //
  return (
    <ScrollView style={{ backgroundColor: themes.colors.white }}>
      <Calendar wrapStyle={{ marginBottom: 20 }} />
      <DayTrainingMenu dayTrainingMenu={dayTrainingMenu} wrapStyle={{ marginBottom: 20 }} />
      {newsList && (
        <View style={{ marginBottom: 40 }}>
          {newsList.map(({ title, createdAt }, i) => (
            <News title={title} createdAt={createdAt} onPress={handleInsertNews} key={i} />
          ))}
        </View>
      )}
    </ScrollView>
  )
}
