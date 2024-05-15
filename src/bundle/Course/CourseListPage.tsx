import { useCallback, useEffect, useState } from 'react';
import useLoadCourseList from './hooks/useLoadFreeTaskList';
import './styles.scss'
import TagListWidget from './_tags/TagListWidget';
import CoursesListWidget from './_courses/CoursesListWidget';
import { allTagItem } from './hooks/const';

const CourseListPage = () => {
  const [selectedTag, setSelectedTag] = useState<string>(allTagItem)
  const handleSelectedTag = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const eTarget = e.target as HTMLElement;
    setSelectedTag(eTarget.dataset['tag'] || allTagItem)
  }, [])

  const { isLoading, loadCourseList, filtredCourseList, tagList } = useLoadCourseList(selectedTag)

  useEffect(() => {
    loadCourseList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="page-wrapper">
      <div className="sidebar">
        <TagListWidget items={tagList} selected={selectedTag} handleSelected={handleSelectedTag} />
      </div>
      <div className="content">
        <CoursesListWidget items={filtredCourseList} />
      </div>
    </div>
  );
}

export default CourseListPage;
