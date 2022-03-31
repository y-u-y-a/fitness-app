import { gql } from '@apollo/client'

export const INSERT_NEWS_ONE = gql`
  mutation insert_news_one($title: String, $content: String) {
    insert_news_one(object: { title: $title, content: $content }) {
      id
      title
      content
    }
  }
`

export const DELETE_NEWS = gql`
  mutation delete_news_by_pk($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`
