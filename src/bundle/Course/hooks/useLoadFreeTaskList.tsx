import { useCallback, useMemo, useState } from 'react'
import getCourseListApi from '../../../data/v1/docs_courses/getCourseListApi'
import { CourseListType } from '../../../data/v1/docs_courses/types'
import { allTagItem } from './const'

const useLoadCourseList = (selectedTag: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [courseList, setCourseList] = useState<CourseListType | null>(null)

  const loadCourseList = useCallback(async () => {
    try {
      setIsLoading(true)

      const res = await getCourseListApi()

      setCourseList(res.json)
      setIsLoading(false)
    } catch (e) {
      console.warn(e)
    }
  }, [])

  const tagList = useMemo(() => {
    let list: string[] = [];

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
    if (selectedTag === allTagItem) return courseList;

    let list: CourseListType = [];

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
