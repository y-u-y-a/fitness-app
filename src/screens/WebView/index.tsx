import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppNavigator } from '../../types/navigator'
import { WebView } from 'react-native-webview'

interface Props extends NativeStackScreenProps<AppNavigator, 'WebView'> {}

export const WebViewScreen: React.VFC<Props> = ({ route }) => {
  return <WebView source={{ uri: route.params.uri }} />
}
