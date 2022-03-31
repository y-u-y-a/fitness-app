/** 種目 */
export type Training = {
  id: number
  name: string
  repetitionMax: number
  times: number
  weight: number
  latestTimes: number
  latestWeight: number
  category: string
}

/** トレーニングメニュー */
export type TrainingMenu = {
  name: string
  trainingList: Training[]
}

/** トレーニングカテゴリー */
export type TrainingCategory = {
  name: string
  trainingList: Training[]
}

/** お知らせ */
export type News = {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}
