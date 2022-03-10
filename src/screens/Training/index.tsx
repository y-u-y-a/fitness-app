import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { ScrollView, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import { TrainingMenu, TrainingCategory } from '../../types'
import { AppStackList } from '../../types/navigator'
import { TrainingList } from '../../components/TrainingList'
import { useQueryTrainingMenuList, useQueryTrainingCategoryList } from '../../hooks/useQuery'
import style from './style'

interface Props {
  navigation: StackNavigationProp<AppStackList>
}

const Scene: React.FC<TrainingMenu[] | TrainingCategory[]> = (list) => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      {list.map(({ name, trainingList }, i) => (
        <TrainingList title={name} trainingList={trainingList} key={i} />
      ))}
    </ScrollView>
  )
}

export const TrainingScreen: React.FC<Props> = ({ navigation }) => {
  const layout = useWindowDimensions()
  const trainingMenuList = useQueryTrainingMenuList()
  const trainingCategoryList = useQueryTrainingCategoryList()

  const [displayIndex, setDisplayIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'scene0', title: 'メニュー' },
    { key: 'scene1', title: '種目' },
  ])
  //
  return (
    <TabView
      navigationState={{ index: displayIndex, routes }}
      initialLayout={{ width: layout.width }}
      onIndexChange={setDisplayIndex}
      // Tab
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={style.tabBarContainer}
          labelStyle={style.labelText}
          indicatorStyle={style.indicator}
          tabStyle={{ width: layout.width / routes.length }}
          scrollEnabled={true}
          bounces={true}
        />
      )}
      // Scene
      renderScene={SceneMap({
        scene0: () => Scene(trainingMenuList),
        scene1: () => Scene(trainingCategoryList),
      })}
    />
  )
}
