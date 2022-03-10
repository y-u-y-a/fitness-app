import React, { VFC } from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export const ProfileScreen: VFC = () => {
  return (
    <View style={styles.container}>
      <Text>This is your profile page.</Text>
    </View>
  )
}
