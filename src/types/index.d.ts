export interface Training {
  id: number
  name: string
  repetitionMax: number
  times: number
  weight: number
  latestTimes: number
  latestWeight: number
  category: string
}

export interface TrainingMenu {
  name: string
  trainingList: Training[]
}

export interface TrainingCategory {
  name: string
  trainingList: Training[]
}

export interface News {
  id: number
  title: string
  uri: string
  date: string
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