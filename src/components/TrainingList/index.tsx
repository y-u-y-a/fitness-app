import React from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Training } from '../../types/domain'
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  title: string
  trainingList: Training[]
}

export const TrainingList: React.VFC<Props> = ({ title, trainingList }) => {
  return (
    <>
      <View style={style.header}>
        <Text style={style.headerTitle}>{title}</Text>
        <MaterialIcons name="add" onPress={() => alert('')} style={style.headerIcon} />
      </View>
      {trainingList.map((item, i) => (
        <TouchableOpacity onPress={() => alert('')} style={style.item} key={i}>
          <Text style={style.nameText}>{item.name}</Text>
          <View style={[style.row, style.itemsCenter]}>
            <Text style={style.infoText}>
              RM：<Text>{item.repetitionMax}</Text>kg
            </Text>
            <Text style={style.infoText}>
              記録：<Text>{item.times}</Text>回
            </Text>
            <MaterialIcons name="mode-edit" style={style.itemIcon} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}
