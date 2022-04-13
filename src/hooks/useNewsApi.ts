import { useMutation } from '@apollo/client'
import { INSERT_NEWS, DELETE_NEWS } from '../gql/mutations/newsMutation'
import { GET_NEWS } from '../gql/queries/newsQuery'
import { DeleteNewsMutation, InsertNewsMutation } from '../types/generated'

export const useNewsApi = () => {
  /** Insert a News */
  const [insertNews] = useMutation<InsertNewsMutation>(INSERT_NEWS, {
    // update(cache, { data }) {
    //   // Mutationのレスポンス
    //   const newData = data?.insert_news_one
    //   // キャッシュを取得？
    //   const existingData: any = cache.readQuery({ query: GET_NEWS })
    //   // キャッシュを更新？
    //   if (newData && existingData) {
    //     cache.writeQuery({
    //       query: GET_NEWS,
    //       data: { tasks: [...existingData?.tasks, newData] },
    //     })
    //   }
    // },
  })
  /** Delete a News */
  const [deleteNews] = useMutation<DeleteNewsMutation>(DELETE_NEWS, {
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
    insertNews: (params: { title: string; content: string }) => insertNews({ variables: params }),
    deleteNews: (params: { uuid: string }) => deleteNews({ variables: params }),
  }
}
