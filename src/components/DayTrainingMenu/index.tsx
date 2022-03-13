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
          <Text style={style.titleText}>{dayTrainingMenu.name}</Text>
        </View>
        <View>
          {dayTrainingMenu.trainingList.map(({ name, weight, times, latestWeight, latestTimes, repetitionMax }, i) => {
            return (
              <TouchableOpacity onPress={() => alert(name)} style={style.item} key={i}>
                <View style={style.itemHeader}>
                  <Text style={style.itemHeaderText}>{name}</Text>
                </View>
                <View style={style.itemBody}>
                  <Text style={style.text}>
                    <Text style={style.fontBold}>{`${weight}`}</Text>
                    <Text> kg</Text>
                    <Text style={style.textSmall}>{`（前回${latestWeight}kg）`}</Text>
                  </Text>
                  <Text style={style.text}>
                    <Text style={style.fontBold}>{`${times}`}</Text>
                    <Text> 回</Text>
                    <Text style={style.textSmall}>{`（前回${latestTimes}回）`}</Text>
                  </Text>
                  <Text style={style.text}>
                    <Text>RM </Text>
                    <Text style={style.fontBold}>{`${repetitionMax}`}</Text>
                    <Text> kg</Text>
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
