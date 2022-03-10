import React from 'react'
import { StyleProp, ViewStyle, View } from 'react-native'
import { Calendar as RNCalendar, LocaleConfig, DateData } from 'react-native-calendars'

interface Props {
  style?: StyleProp<ViewStyle>
}

// TODO: Calenderコンポーネントを切り分ける
LocaleConfig.defaultLocale = 'jp'
LocaleConfig.locales.jp = {
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
}

export const Calendar: React.FC<Props> = ({ style }) => {
  const onDayPress = ({ day, month, year }: DateData): void => {
    console.log('selected day >>>>>', day, month, year)
  }
  //
  return (
    <View style={style}>
      <RNCalendar
        monthFormat={'yyyy年 MM月'}
        firstDay={1} // 月曜日始まり=1
        onDayPress={onDayPress} // 日付押下時の挙動
        enableSwipeMonths={true} // スワイプで年月変更
      />
    </View>
  )
}
