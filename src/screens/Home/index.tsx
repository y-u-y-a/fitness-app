import React, { VFC } from 'react'
import { ScrollView, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import themes from '../../themes'
import { AppNavigator } from '../../types/navigator'
import { useAppState } from '../../hooks/useAppState'
import { useNewsApi } from '../../hooks/useNewsApi'
import { Calendar, DayTrainingMenu, News } from '../../components'

type Props = {
  navigation: StackNavigationProp<AppNavigator, 'WebView'>
}

export const HomeScreen: VFC<Props> = ({ navigation }) => {
  const { newsList, dayTrainingMenu } = useAppState()
  const { insertNewsOne, deleteNews } = useNewsApi()

  const handleUpdateNews = async (uuid: string) => {
    const params = {
      title: '今日はテストのお知らせです。',
      content: 'これはテスト用のテキスト本文です。',
    }
    try {
      // TODO: insert後データがロードされない...
      uuid === '3c105af2-73df-4eed-8004-b4a00667fbe4' ? await insertNewsOne(params) : await deleteNews({ uuid })
      return
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
          {newsList.map(({ uuid, title, createdAt }) => (
            <News uuid={uuid} title={title} createdAt={createdAt} updateNews={handleUpdateNews} key={uuid} />
          ))}
        </View>
      )}
    </ScrollView>
  )
}
