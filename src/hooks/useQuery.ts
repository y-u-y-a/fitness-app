import { request } from 'graphql-request'
import { useQuery } from 'react-query'

import { Training, News, Rocket, RocketList, TrainingMenu, TrainingCategory } from '../types'
import { getRocketQuery } from '../queries'
import { cacheKey } from '../constants'

const queryConfig = {
  staleTime: 10, // 10ms以降で再度fetchした場合、cacheを使用せず再取得
  refetchOnWindowFocus: false,
}

// Get data from  GraphQL server.
export const useQueryRocketList = () => {
  const { data, status } = useQuery<Rocket[], Error>({
    ...queryConfig,
    queryKey: cacheKey.rocketList, // ここのkeyはcacheの格納場所を識別
    queryFn: () => request<RocketList>('https://api.spacex.land/graphql', getRocketQuery).then(({ rockets }) => rockets),
  })
  // TODO: statusによるエラーハンドリング
  return data
}

export const useQueryTrainingList = (): Training[] => {
  return [
    {
      id: 1,
      name: 'ベンチプレス',
      repetitionMax: 50,
      times: 12,
      weight: 40,
      latestTimes: 8,
      latestWeight: 40,
      category: '胸',
    },
    {
      id: 1,
      name: 'ベンチプレス',
      repetitionMax: 50,
      times: 12,
      weight: 40,
      latestTimes: 8,
      latestWeight: 40,
      category: '胸',
    },
    {
      id: 1,
      name: 'ベンチプレス',
      repetitionMax: 50,
      times: 12,
      weight: 40,
      latestTimes: 8,
      latestWeight: 40,
      category: '胸',
    },
    {
      id: 1,
      name: 'ベンチプレス',
      repetitionMax: 50,
      times: 12,
      weight: 40,
      latestTimes: 8,
      latestWeight: 40,
      category: '胸',
    },
    {
      id: 1,
      name: 'ベンチプレス',
      repetitionMax: 50,
      times: 12,
      weight: 40,
      latestTimes: 8,
      latestWeight: 40,
      category: '胸',
    },
  ]
}

export const useQueryTrainingMenuList = (): TrainingMenu[] => {
  return [
    {
      name: '胸・背中のメニュー',
      trainingList: [
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
      ],
    },
    {
      name: '脚のメニュー',
      trainingList: [
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
      ],
    },
    {
      name: '肩・腕のメニュー',
      trainingList: [
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
      ],
    },
  ]
}

export const useQueryTrainingCategoryList = (): TrainingCategory[] => {
  return [
    {
      name: '胸',
      trainingList: [
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
      ],
    },
    {
      name: '背中',
      trainingList: [
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
      ],
    },
    {
      name: '肩',
      trainingList: [
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
        {
          id: 1,
          name: 'ベンチプレス',
          repetitionMax: 50,
          times: 12,
          weight: 40,
          latestTimes: 8,
          latestWeight: 40,
          category: '胸',
        },
      ],
    },
  ]
}

export const useQueryNewsList = (): News[] => {
  return [
    {
      id: 1,
      title: 'リリースのお知らせ',
      date: '1/1',
      uri: 'https://github.com/',
    },
    {
      id: 2,
      title: 'システムメンテナンスのお知らせ',
      date: '2/14',
      uri: 'https://github.com/',
    },
  ]
}
