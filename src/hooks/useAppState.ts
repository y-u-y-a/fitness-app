import { useQuery } from '@apollo/client'
import dayjs from 'dayjs'

import { NewsResponse } from '../types/response'
import { GET_NEWS } from '../gql/queries/newsQuery'
import { Training, TrainingCategory, TrainingMenu } from '../types/domain'

export const useAppState = () => {
  // newsList: お知らせ一覧
  const fetchNewsList = () => {
    const { data: newsData } = useQuery<NewsResponse>(GET_NEWS)
    return (
      newsData?.news.map((item) => ({
        ...item,
        createdAt: dayjs(item.createdAt).format('MM/DD'),
        updatedAt: dayjs(item.updatedAt).format('MM/DD'),
      })) ?? []
    )
  }
  const newsList = fetchNewsList()
  // trainingList: 種目一覧
  const trainingList: Training[] = [...Array(8)].map((_, i) => {
    return {
      uuid: String(i + 1),
      name: 'ベンチプレス',
      repetitionMax: 50,
      times: 12,
      weight: 40,
      latestTimes: 8,
      latestWeight: 40,
      category: '胸',
    }
  })
  // dayTrainingMenu: 本日のトレーニングメニュー
  const dayTrainingMenu: TrainingMenu = {
    name: '胸の日',
    trainingList: [...Array(4)].map((_, i) => {
      return {
        uuid: String(i + 1),
        name: 'ベンチプレス',
        repetitionMax: 50,
        times: 12,
        weight: 40,
        latestTimes: 8,
        latestWeight: 40,
        category: '胸',
      }
    }),
  }
  // trainingListSortByMenu: メニューごとにソートされたトレーニングメニュー一覧
  const trainingListSortByMenu: TrainingMenu[] = ['胸の日', '脚の日', '背中の日', '肩の日'].map((name) => {
    return {
      name,
      trainingList: [...Array(4)].map((_, i) => {
        return {
          uuid: String(i + 1),
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        }
      }),
    }
  })
  // trainingListSortByCategory: カテゴリーごとにソートされたトレーニングメニュー一覧
  const trainingListSortByCategory: TrainingCategory[] = ['胸', '脚', '背中', '肩', '腕'].map((name) => {
    return {
      name,
      trainingList: [...Array(4)].map((_, i) => {
        return {
          uuid: String(i + 1),
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        }
      }),
    }
  })
  //
  return { newsList, trainingList, dayTrainingMenu, trainingListSortByMenu, trainingListSortByCategory }
}
