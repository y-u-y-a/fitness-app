import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { useQueryRocketList } from '../../hooks/useQuery'
import styles from './style'

export const HomeScreen = (): JSX.Element => {
  // TODO: statusで表示の切替
  const { status, data: rocketList } = useQueryRocketList()
  console.log('success')
  //
  return (
    <View>
      <FlatList
        data={rocketList}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
