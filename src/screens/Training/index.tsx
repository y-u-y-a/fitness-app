import React, { VFC, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { ScrollView, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import { TrainingMenu, TrainingCategory } from '../../types'
import { AppNavigator } from '../../types/navigator'
import { TrainingList } from '../../components/TrainingList'
import { useQueryTrainingMenuList, useQueryTrainingCategoryList } from '../../hooks/useQuery'
import style from './style'

interface Props {
  navigation: StackNavigationProp<AppNavigator>
}

export const TrainingScreen: VFC<Props> = ({ navigation }) => {
  const layout = useWindowDimensions()
  const trainingMenuList: TrainingMenu[] = useQueryTrainingMenuList()
  const trainingCategoryList: TrainingCategory[] = useQueryTrainingCategoryList()

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
            {trainingMenuList.map(({ name, trainingList }, i) => (
              <TrainingList title={name} trainingList={trainingList} key={i} />
            ))}
          </ScrollView>
        ),
        scene1: () => (
          <ScrollView style={style.container}>
            {trainingCategoryList.map(({ name, trainingList }, i) => (
              <TrainingList title={name} trainingList={trainingList} key={i} />
            ))}
          </ScrollView>
        ),
      })}
    />
  )
}
