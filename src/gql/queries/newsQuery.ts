import { gql } from '@apollo/client'

export const GET_NEWS = gql`
  query GET_NEWS {
    news {
      uuid
      title
      content
      createdAt
      updatedAt
    }
  }
`
