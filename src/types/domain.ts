/** 種目 */
export type Training = {
  uuid: string
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
  uuid: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}
