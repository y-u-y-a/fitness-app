import { gql } from '@apollo/client'

export const INSERT_NEWS = gql`
  mutation InsertNews($title: String, $content: String) {
    insert_news_one(object: { title: $title, content: $content }) {
      title
      content
    }
  }
`

export const DELETE_NEWS = gql`
  mutation DeleteNews($uuid: uuid!) {
    delete_news_by_pk(uuid: $uuid) {
      uuid
    }
  }
`
