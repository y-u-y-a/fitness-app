export type RootStackList = {
  Tab: undefined
  Home: undefined
  Profile: undefined
  Settings: undefined
}

export type ScreenList = {
  Home?: undefined
  Training?: undefined
  Calender?: undefined
  Settings?: undefined
}

export interface Shop {
  name: string
  place: string
}

export interface Rocket {
  id: string
  name: string
  country: string
  mass: {
    kg: number
  }
  height: {
    meters: number
  }
  diameter: {
    meters: number
  }
}

export interface RocketList {
  rockets: Rocket[]
}
