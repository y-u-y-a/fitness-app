import { useMutation } from '@apollo/client'
import { INSERT_NEWS_ONE, DELETE_NEWS } from '../gql/mutations/newsMutation'

export const useNewsMutation = () => {
  /**
   * Insert a News
   */
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
  /**
   * Delete a News
   */
  const [deleteNews] = useMutation(DELETE_NEWS, {
    update(cache, { data: { delete_news_by_pk } }) {
      cache.modify({
        fields: {
          news(existingItemList, { readField }) {
            return existingItemList.filter((item: any) => delete_news_by_pk.id !== readField('id', item))
          },
        },
      })
    },
  })
  //
  return {
    insertNewsOne: (params: object) => insertNewsOne({ variables: params }),
    deleteNews: (params: object) => deleteNews({ variables: params }),
  }
}
