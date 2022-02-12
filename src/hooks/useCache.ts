import { useQueryClient } from 'react-query'
import { cacheKey } from '@/constants'
import { Rocket } from '@/types'

// Get data from cache.
export const useCacheRocketList = () => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData<Rocket[]>(cacheKey.rocketList)
}
