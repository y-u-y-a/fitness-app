import { useQuery } from '@apollo/client'

import { NewsRes } from '../types'
import { GET_NEWS } from '../gql/queries/newsQuery'

/**
 * お知らせ一覧
 */
export const useNewsQuery = () => {
  try {
    const { data } = useQuery<NewsRes>(GET_NEWS)
    return data?.news ?? []
  } catch (err) {
    console.log('[API Error]お知らせ情報の取得に失敗しました。', err)
    return []
  }
}
