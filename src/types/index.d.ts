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
  content: string
  createdAt: string
  uri?: string
}

export interface NewsRes {
  news: News[]
}
