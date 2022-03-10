import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Training } from '../../types'
import style from './style'

interface Props {
  dayTraining: {
    title: string
    menu: Training[]
  }
}

export const DayTraining: React.FC<Props> = ({ dayTraining }) => {
  return (
    <View style={[style.wrapper, style.container]}>
      <View style={style.title}>
        <Text>{dayTraining.title}</Text>
      </View>
      <View>
        {dayTraining.menu.map((item, i) => {
          return (
            <TouchableOpacity onPress={() => console.log(item.name)} style={style.item} key={i}>
              <View style={[style.widthFull, style.flex, style.spaceBetween]}>
                <Text style={style.text}>{item.name}</Text>
                <Text style={style.text}>RM算出</Text>
              </View>
              <View style={[style.widthFull, style.flex, style.spaceBetween]}>
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
