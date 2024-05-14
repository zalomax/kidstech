import { useCallback, useMemo, useState } from 'react'
import getCourseListApi from '../../../data/v1/docs_courses/getCourseListApi'

const useLoadCourseList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [courseList, setCourseList] = useState<any[] | null>(null)

  const loadCourseList = useCallback(async () => {
    try {
      setIsLoading(true)

      const res = await getCourseListApi()

      setCourseList(res.json as any[])
      setIsLoading(false)
    } catch (e) {
      console.warn(e)
    }
  }, [])

  const tagList = useMemo(() => {
    let list: any[] = [];

    if (Array.isArray(courseList)) {
      courseList.forEach(courseItem => {
        courseItem.tags.forEach((tagItem: string) => {
          if (!list.includes(tagItem)) {
            list.push(tagItem)
          }
        })
      })
    }

    return list
  }, [courseList]);

  return {
    isLoading,
    loadCourseList,
    courseList,
    tagList,
  }
}

export default useLoadCourseList
