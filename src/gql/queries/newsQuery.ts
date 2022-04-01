import { gql } from '@apollo/client'

export const GET_NEWS = gql`
  query GetNews {
    news {
      uuid
      title
      content
      createdAt
      updatedAt
    }
  }
`
