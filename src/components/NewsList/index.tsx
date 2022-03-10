import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import style from './style'

interface Props {
  newsList: { title: string; date: string; onPress: () => void }[]
}

export const NewsList: React.FC<Props> = ({ newsList }) => {
  return (
    <View style={style.container}>
      {newsList.map((item, index) => (
        <TouchableOpacity onPress={item.onPress} style={style.item} key={index}>
          <Text style={style.itemTextDate}>{item.date}</Text>
          <Text style={style.itemTextDesc}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
