import React, { VFC } from 'react'
import { ScrollView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../../themes'
import { AppNavigator } from '../../types/navigator'
import { useNewsQuery } from '../../hooks/useNewsQuery'
import { useNewsMutation } from '../../hooks/useNewsMutation'
import { useQueryDayTrainingMenu } from '../../hooks/useTrainingQuery'
import { Calendar, DayTrainingMenu, News } from '../../components'

interface Props {
  navigation: StackNavigationProp<AppNavigator, 'WebView'>
}

export const HomeScreen: VFC<Props> = ({ navigation }) => {
  const dayTrainingMenu = useQueryDayTrainingMenu()
  const newsList = useNewsQuery()
  const { insertNewsOne, deleteNews } = useNewsMutation()
  //
  const handleInsertNews = async () => {
    const params = {
      title: '今日は雨ですです。',
      content: '深夜のテストです。テストです。',
    }
    try {
      await insertNewsOne(params)
    } catch (err) {
      console.log(err)
    }
  }
  const handleDeleteNews = async () => {
    try {
      await deleteNews({ id: 'f8173a07-a3f8-4d74-b3ca-0ba72e8c7a5f' })
    } catch (err) {
      console.log(err)
    }
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
