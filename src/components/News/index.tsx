import React, { VFC } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import style from './style'

interface Props {
  title: string
  date: string
  onPress: () => void
}

export const News: VFC<Props> = ({ title, date, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Text style={style.dateText}>{date}</Text>
      <Text style={style.descText} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
