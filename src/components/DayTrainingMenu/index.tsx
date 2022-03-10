import React, { VFC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { TrainingMenu } from '../../types'
import style from './style'

interface Props {
  dayTrainingMenu: TrainingMenu
}

export const DayTrainingMenu: VFC<Props> = ({ dayTrainingMenu }) => {
  return (
    <View style={style.container}>
      <View style={style.title}>
        <Text>{dayTrainingMenu.name}</Text>
      </View>
      <View>
        {dayTrainingMenu.trainingList.map((item, i) => {
          return (
            <TouchableOpacity onPress={() => console.log(item.name)} style={style.item} key={i}>
              <View style={[style.widthFull, style.row, style.spaceBetween]}>
                <Text style={style.text}>{item.name}</Text>
                <Text style={style.text}>RM算出</Text>
              </View>
              <View style={[style.widthFull, style.row, style.spaceBetween]}>
                <Text style={style.text}>{`${item.weight}kg（前回${item.latestWeight}kg）`}</Text>
                <Text style={style.text}>{`${item.times}回（前回${item.latestTimes}回）`}</Text>
                <Text style={style.text}>{`${item.repetitionMax}kg`}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
