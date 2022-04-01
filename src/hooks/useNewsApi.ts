import { useMutation } from '@apollo/client'
import { INSERT_NEWS_ONE, DELETE_NEWS } from '../gql/mutations/newsMutation'

export const useNewsApi = () => {
  /** Insert a News */
  const [insertNewsOne] = useMutation(INSERT_NEWS_ONE, {
    update(cache, { data: { insert_news_one } }) {
      const cacheId: any = cache.identify(insert_news_one)
      cache.modify({
        fields: {
          news(existingItemList, { toReference }) {
            return [toReference(cacheId), ...existingItemList]
          },
        },
      })
    },
  })
  /** Delete a News */
  const [deleteNews] = useMutation(DELETE_NEWS, {
    update(cache, { data: { delete_news_by_pk } }) {
      cache.modify({
        fields: {
          news(existingItemList, { readField }) {
            return existingItemList.filter((item: any) => delete_news_by_pk.uuid !== readField('uuid', item))
          },
        },
      })
    },
  })
  //
  return {
    insertNewsOne: (params: { title: string; content: string }) => insertNewsOne({ variables: params }),
    deleteNews: (params: { uuid: string }) => deleteNews({ variables: params }),
  }
}
