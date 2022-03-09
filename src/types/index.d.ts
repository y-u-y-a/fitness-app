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
