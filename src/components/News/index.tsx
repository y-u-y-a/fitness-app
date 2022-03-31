import React, { VFC } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import style from './style'

type Props = {
  title: string
  createdAt: string
  onPress: () => void
}

export const News: VFC<Props> = ({ title, createdAt, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Text style={style.dateText}>{createdAt}</Text>
      <Text style={style.descText} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
