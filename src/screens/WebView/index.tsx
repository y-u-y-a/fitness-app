import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppStackList } from '../../types/navigator'
import { WebView } from 'react-native-webview'

interface Props extends NativeStackScreenProps<AppStackList, 'WebView'> {}

export const WebViewScreen: React.FC<Props> = ({ route }) => {
  return <WebView source={{ uri: route.params.uri }} />
}
