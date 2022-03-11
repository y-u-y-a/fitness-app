import React, { VFC } from 'react'
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { TabBarItem } from 'react-native-tab-view'

import { TrainingMenu } from '../../types'
import style from './style'

interface Props {
  wrapStyle?: StyleProp<ViewStyle>
  dayTrainingMenu: TrainingMenu
}

export const DayTrainingMenu: VFC<Props> = ({ wrapStyle, dayTrainingMenu }) => {
  return (
    <View style={wrapStyle}>
      <View style={style.container}>
        <View style={style.title}>
          <Text>{dayTrainingMenu.name}</Text>
        </View>
        <View>
          {dayTrainingMenu.trainingList.map(({ name, weight, times, latestWeight, latestTimes, repetitionMax }, i) => {
            return (
              <TouchableOpacity onPress={() => alert(name)} style={style.item} key={i}>
                <View style={style.itemHeader}>
                  <Text style={[style.text12, style.fontBold]}>{name}</Text>
                  <Text style={[style.text12, style.fontBold]}>RM算出</Text>
                </View>
                <View style={style.itemBody}>
                  <Text>
                    <Text style={[style.text12, style.fontBold]}>{`${weight}`}</Text>
                    <Text style={style.text12}> kg</Text>
                    <Text style={[style.text10, style.textGray]}>{`（前回${latestWeight}kg）`}</Text>
                  </Text>
                  <Text>
                    <Text style={[style.text12, style.fontBold]}>{`${times}`}</Text>
                    <Text style={style.text12}> 回</Text>
                    <Text style={[style.text10, style.textGray]}>{`（前回${latestTimes}回）`}</Text>
                  </Text>
                  <Text>
                    {`${repetitionMax}`}
                    <Text style={style.text12}> kg</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </View>
  )
}
