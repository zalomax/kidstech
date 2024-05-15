export type CourseListType = ICourse[]

export interface ICourse {
  name: string
  id: string
  image: string
  bgColor: string
  tags: string[]
}