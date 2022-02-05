import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { getShopList } from '@lib/firebase'
import { Shop } from '@types'

export default function App() {
  const [shopList, setShopList] = useState<Shop[]>([])
  // レンダリングの度に呼び出される、第二引数に指定した場合、指定した変数の変更の際にも呼び出される
  useEffect(() => {
    getFirebaseItemList()
  }, [])

  const getFirebaseItemList = async () => {
    const shopList = await getShopList()
    setShopList(shopList)
  }
  const shopItemList = shopList.map((shop, index) => (
    <View style={{ margin: 12 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ))

  return <View style={styles.container}>{shopItemList}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
