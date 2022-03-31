import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const link = createHttpLink({
  uri: process.env.API_URL ?? '',
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? '',
  },
})

const cache = new InMemoryCache()

export const client = new ApolloClient({ link, cache })
