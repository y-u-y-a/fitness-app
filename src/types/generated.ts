import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "news" */
  delete_news?: Maybe<News_Mutation_Response>;
  /** delete single row from the table: "news" */
  delete_news_by_pk?: Maybe<News>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "news" */
  insert_news?: Maybe<News_Mutation_Response>;
  /** insert a single row into the table: "news" */
  insert_news_one?: Maybe<News>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "news" */
  update_news?: Maybe<News_Mutation_Response>;
  /** update single row of the table: "news" */
  update_news_by_pk?: Maybe<News>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_NewsArgs = {
  where: News_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_News_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_NewsArgs = {
  objects: Array<News_Insert_Input>;
  on_conflict?: InputMaybe<News_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_News_OneArgs = {
  object: News_Insert_Input;
  on_conflict?: InputMaybe<News_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_NewsArgs = {
  _set?: InputMaybe<News_Set_Input>;
  where: News_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_News_By_PkArgs = {
  _set?: InputMaybe<News_Set_Input>;
  pk_columns: News_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** お知らせ情報 */
export type News = {
  __typename?: 'news';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "news" */
export type News_Aggregate = {
  __typename?: 'news_aggregate';
  aggregate?: Maybe<News_Aggregate_Fields>;
  nodes: Array<News>;
};

/** aggregate fields of "news" */
export type News_Aggregate_Fields = {
  __typename?: 'news_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<News_Max_Fields>;
  min?: Maybe<News_Min_Fields>;
};


/** aggregate fields of "news" */
export type News_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<News_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "news". All fields are combined with a logical 'AND'. */
export type News_Bool_Exp = {
  _and?: InputMaybe<Array<News_Bool_Exp>>;
  _not?: InputMaybe<News_Bool_Exp>;
  _or?: InputMaybe<Array<News_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "news" */
export enum News_Constraint {
  /** unique or primary key constraint */
  NewsPkey = 'news_pkey'
}

/** input type for inserting data into table "news" */
export type News_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type News_Max_Fields = {
  __typename?: 'news_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type News_Min_Fields = {
  __typename?: 'news_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "news" */
export type News_Mutation_Response = {
  __typename?: 'news_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<News>;
};

/** on_conflict condition type for table "news" */
export type News_On_Conflict = {
  constraint: News_Constraint;
  update_columns?: Array<News_Update_Column>;
  where?: InputMaybe<News_Bool_Exp>;
};

/** Ordering options when selecting data from "news". */
export type News_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: news */
export type News_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "news" */
export enum News_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "news" */
export type News_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "news" */
export enum News_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Uuid = 'uuid'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch aggregated fields from the table: "news" */
  news_aggregate: News_Aggregate;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Query_RootNews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Query_RootNews_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  uuid: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch aggregated fields from the table: "news" */
  news_aggregate: News_Aggregate;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootNews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootNews_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  uuid: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** ユーザー情報 */
export type Users = {
  __typename?: 'users';
  age: Scalars['Int'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  iconUrl: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  age?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  age?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  iconUrl?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  age?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  age?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  age?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  iconUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  age?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  iconUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  age?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  iconUrl?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  IconUrl = 'iconUrl',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  age?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  iconUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  age?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  age?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  IconUrl = 'iconUrl',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  age?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  age?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  age?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type InsertNewsMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
}>;


export type InsertNewsMutation = { __typename?: 'mutation_root', insert_news_one?: { __typename?: 'news', title: string, content: string } | null };

export type DeleteNewsMutationVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type DeleteNewsMutation = { __typename?: 'mutation_root', delete_news_by_pk?: { __typename?: 'news', uuid: any } | null };

export type GetNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', uuid: any, title: string, content: string, createdAt: any, updatedAt: any }> };


export const InsertNewsDocument = gql`
    mutation InsertNews($title: String, $content: String) {
  insert_news_one(object: {title: $title, content: $content}) {
    title
    content
  }
}
    `;
export type InsertNewsMutationFn = Apollo.MutationFunction<InsertNewsMutation, InsertNewsMutationVariables>;

/**
 * __useInsertNewsMutation__
 *
 * To run a mutation, you first call `useInsertNewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNewsMutation, { data, loading, error }] = useInsertNewsMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useInsertNewsMutation(baseOptions?: Apollo.MutationHookOptions<InsertNewsMutation, InsertNewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertNewsMutation, InsertNewsMutationVariables>(InsertNewsDocument, options);
      }
export type InsertNewsMutationHookResult = ReturnType<typeof useInsertNewsMutation>;
export type InsertNewsMutationResult = Apollo.MutationResult<InsertNewsMutation>;
export type InsertNewsMutationOptions = Apollo.BaseMutationOptions<InsertNewsMutation, InsertNewsMutationVariables>;
export const DeleteNewsDocument = gql`
    mutation DeleteNews($uuid: uuid!) {
  delete_news_by_pk(uuid: $uuid) {
    uuid
  }
}
    `;
export type DeleteNewsMutationFn = Apollo.MutationFunction<DeleteNewsMutation, DeleteNewsMutationVariables>;

/**
 * __useDeleteNewsMutation__
 *
 * To run a mutation, you first call `useDeleteNewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNewsMutation, { data, loading, error }] = useDeleteNewsMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useDeleteNewsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNewsMutation, DeleteNewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNewsMutation, DeleteNewsMutationVariables>(DeleteNewsDocument, options);
      }
export type DeleteNewsMutationHookResult = ReturnType<typeof useDeleteNewsMutation>;
export type DeleteNewsMutationResult = Apollo.MutationResult<DeleteNewsMutation>;
export type DeleteNewsMutationOptions = Apollo.BaseMutationOptions<DeleteNewsMutation, DeleteNewsMutationVariables>;
export const GetNewsDocument = gql`
    query GetNews {
  news {
    uuid
    title
    content
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetNewsQuery__
 *
 * To run a query within a React component, call `useGetNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
      }
export function useGetNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
        }
export type GetNewsQueryHookResult = ReturnType<typeof useGetNewsQuery>;
export type GetNewsLazyQueryHookResult = ReturnType<typeof useGetNewsLazyQuery>;
export type GetNewsQueryResult = Apollo.QueryResult<GetNewsQuery, GetNewsQueryVariables>;