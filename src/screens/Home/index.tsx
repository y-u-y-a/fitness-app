import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { HomeStackList } from '../../types'
import { useQueryRocketList } from '../../hooks/useQuery'
import style from './style'

type Props = {
  navigation: StackNavigationProp<HomeStackList, 'Home'>
}

// From HomeStackNavigator.
export const HomeScreen: React.FC<Props> = ({ navigation }): JSX.Element => {
  // TODO: statusで表示の切替
  const { status, data } = useQueryRocketList() // Call API.
  //
  const menuList = [
    {
      name: 'Profile',
      onPress: () => navigation.navigate('Profile'),
    },
  ]
  //
  return (
    <View>
      <FlatList
        data={menuList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={item.onPress} style={style.listItem}>
            <Text style={style.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}
