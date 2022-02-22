import { request } from 'graphql-request'
import { useQuery } from 'react-query'

import { Rocket, RocketList } from '../types'
import { getRocketQuery } from '../queries'
import { cacheKey } from '../constants'

const queryConfig = {
  staleTime: 10, // 10ms以降で再度fetchした場合、cacheを使用せず再取得
  refetchOnWindowFocus: false,
}

// Get data from  GraphQL server.
export const useQueryRocketList = () => {
  return useQuery<Rocket[], Error>({
    ...queryConfig,
    queryKey: cacheKey.rocketList, // ここのkeyはcacheの格納場所を識別
    queryFn: () => request<RocketList>('https://api.spacex.land/graphql', getRocketQuery).then(({ rockets }) => rockets),
  })
}

export const useQueryTrainingList = () => {
  return {
    data: [
      {
        id: 1,
        name: 'ベンチプレス',
        repetitionMax: 50,
        times: 12,
        weight: 40,
        latestTimes: 8,
        latestWeight: 40,
      },
      {
        id: 2,
        name: 'ダンベルフライ',
        repetitionMax: 50,
        times: 12,
        weight: 40,
        latestTimes: 8,
        latestWeight: 40,
      },
      {
        id: 3,
        name: 'ダンベルプレス',
        repetitionMax: 50,
        times: 12,
        weight: 40,
        latestTimes: 8,
        latestWeight: 40,
      },
      {
        id: 4,
        name: 'デッドリフト',
        repetitionMax: 50,
        times: 12,
        weight: 40,
        latestTimes: 8,
        latestWeight: 40,
      },
      {
        id: 5,
        name: 'ダンベルデッドリフト',
        repetitionMax: 50,
        times: 12,
        weight: 40,
        latestTimes: 8,
        latestWeight: 40,
      },
      {
        id: 6,
        name: 'チンニング（懸垂）',
        repetitionMax: 50,
        times: 12,
        weight: 40,
        latestTimes: 8,
        latestWeight: 40,
      },
    ],
  }
}
