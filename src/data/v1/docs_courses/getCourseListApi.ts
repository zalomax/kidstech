import ApiService from "../../ApiService"
import { CourseListType } from "./types"

const getCourseListApi = async () => {
  const uri = `/docs/courses.json`

  return ApiService.GET<CourseListType>(uri)
}

export default getCourseListApi
