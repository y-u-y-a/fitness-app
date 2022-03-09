import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { Training } from '../../types'
import { Calendar } from '../../components/Calendar'
import style from './style'

interface Props {
  todayTraining: {
    title: string
    menu: Training[]
  }
  newsList: { description: string; onPress: () => void }[]
}

const Presenter: React.FC<Props> = ({ todayTraining, newsList }) => {
  return (
    // TODO: Layoutの切り出し
    <ScrollView style={{ backgroundColor: '#fff' }}>
      {/* カレンダー */}
      <Calendar style={{ marginBottom: 20 }} />
      {/* トレーニング一覧 */}
      <View style={[style.trainingWrapper, style.trainingContainer]}>
        <View style={style.trainingTitle}>
          <Text>{todayTraining.title}</Text>
        </View>
        <View>
          {todayTraining.menu.map((item) => {
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
      {/* お知らせ一覧 */}
      <View style={style.newsContainer}>
        {newsList.map((item, index) => (
          <TouchableOpacity key={index}>
            <Text onPress={item.onPress} style={style.newsItem}>
              {item.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default Presenter
