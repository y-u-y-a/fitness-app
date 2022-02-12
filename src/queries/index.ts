import { gql } from 'graphql-request'

export const getRocketQuery = gql`
  query GetRockets {
    rockets {
      id
      name
      country
      mass {
        kg
      }
      height {
        meters
      }
      diameter {
        meters
      }
    }
  }
`
