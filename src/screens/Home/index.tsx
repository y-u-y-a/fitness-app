import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Calendar, LocaleConfig, DateData } from 'react-native-calendars'

import { HomeStackList } from '../../types'
import { useQueryTrainingList } from '../../hooks/useQuery'
import style from './style'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {
  navigation: StackNavigationProp<HomeStackList, 'Home'>
}

// From HomeStackNavigator.
export const HomeScreen: React.FC<Props> = ({ navigation }): JSX.Element => {
  const { data: trainingList } = useQueryTrainingList()
  // TODO: Calenderコンポーネントを切り分ける
  LocaleConfig.defaultLocale = 'jp'
  LocaleConfig.locales.jp = {
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
  }
  const onDayPress = ({ day, month, year }: DateData): void => {
    console.log('selected day >>>>>', day, month, year)
  }
  //
  return (
    // TODO: Layoutの切り出し
    <ScrollView style={style.body}>
      {/* カレンダー */}
      <View style={{ marginBottom: 20 }}>
        <Calendar
          monthFormat={'yyyy年 MM月'}
          firstDay={1} // 月曜日始まり=1
          onDayPress={onDayPress} // 日付押下時の挙動
          enableSwipeMonths={true} // スワイプで年月変更
        />
      </View>
      {/* トレーニング一覧 */}
      <View style={[style.trainingWrapper, style.trainingContainer]}>
        <View style={style.trainingTitle}>
          <Text>胸・背中の日</Text>
        </View>
        <View>
          {trainingList.map((item) => {
            return (
              <TouchableOpacity onPress={() => console.log(item.name)} style={style.trainingItem} key={item.id}>
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
    </ScrollView>
  )
}
