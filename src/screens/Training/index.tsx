import React, { VFC, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { ScrollView, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import { TrainingMenu, TrainingCategory } from '../../types/domain'
import { AppNavigator } from '../../types/navigator'
import { TrainingList } from '../../components/TrainingList'
import style from './style'
import { useAppState } from '../../hooks/useAppState'

type Props = {
  navigation: StackNavigationProp<AppNavigator>
}

export const TrainingScreen: VFC<Props> = ({ navigation }) => {
  const layout = useWindowDimensions()
  const { trainingListSortByMenu, trainingListSortByCategory } = useAppState()

  const [displayIndex, setDisplayIndex] = useState(0)
  const routes = [
    { key: 'scene0', title: 'メニュー' },
    { key: 'scene1', title: '種目' },
  ]
  //
  return (
    <TabView
      navigationState={{ routes, index: displayIndex }}
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
        scene0: () => (
          <ScrollView style={style.container}>
            {trainingListSortByMenu.map(({ name, trainingList }, i) => (
              <TrainingList title={name} trainingList={trainingList} key={i} />
            ))}
          </ScrollView>
        ),
        scene1: () => (
          <ScrollView style={style.container}>
            {trainingListSortByCategory.map(({ name, trainingList }, i) => (
              <TrainingList title={name} trainingList={trainingList} key={i} />
            ))}
          </ScrollView>
        ),
      })}
    />
  )
}
