export type MainTabStackList = {
  Home?: undefined
  Training?: undefined
  Calender?: undefined
  Settings?: undefined
  Add?: undefined
}

export type HomeStackList = WebViewStackList & {
  Tab: undefined
  Home: undefined
  Profile: undefined
  Settings: undefined
}

// 共通
export type WebViewStackList = {
  WebView: {
    uri: string
  }
}
