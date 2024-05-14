import { useCallback, useMemo, useState } from 'react'
import getCourseListApi from '../../../data/v1/docs_courses/getCourseListApi'

const useLoadCourseList = (selectedTag: string | null) => {
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

  const filtredCourseList = useMemo(() => {
    if (!selectedTag) return courseList;

    let list: any[] = [];

    if (Array.isArray(courseList)) {
      courseList.forEach(courseItem => {
        if (courseItem.tags.includes(selectedTag)) {
          list.push(courseItem)
        }
      })
    }

    return list
  }, [courseList, selectedTag]);

  return {
    isLoading,
    loadCourseList,
    courseList,
    filtredCourseList,
    tagList,
  }
}

export default useLoadCourseList
