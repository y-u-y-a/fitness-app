export type TabNavigatorList = {
  Home?: undefined
  Training?: undefined
  Calender?: undefined
  Settings?: undefined
  Add?: undefined
}

export type HomeStackList = {
  Tab: undefined
  Home: undefined
  Profile: undefined
  Settings: undefined
}

export interface Training {
  id: number
  name: string
  repetitionMax: number
  times: number
  weight: number
  latestTimes: number
  latestWeight: number
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
