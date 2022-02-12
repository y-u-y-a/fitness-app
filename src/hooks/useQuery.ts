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
