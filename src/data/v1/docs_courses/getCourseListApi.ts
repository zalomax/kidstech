import ApiService from "../../ApiService"

const getCourseListApi = async () => {
  const uri = `/docs/courses.json`

  return ApiService.GET(uri)
}

export default getCourseListApi
