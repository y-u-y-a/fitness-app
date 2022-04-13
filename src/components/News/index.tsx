import React, { VFC } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import style from './style'

type Props = {
  uuid: string
  title: string
  createdAt: string
  updateNews: (uuid: string) => void
}

export const News: VFC<Props> = ({ uuid, title, createdAt, updateNews }) => {
  return (
    <TouchableOpacity onPress={() => updateNews(uuid)} style={style.container}>
      <Text style={style.dateText}>{createdAt}</Text>
      <Text style={style.descText} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
