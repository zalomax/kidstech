import { useEffect, useState } from 'react';
import useLoadCourseList from './hooks/useLoadFreeTaskList';
import './styles.scss'
import TagListWidget from './_tags/TagListWidget';
import CoursesListWidget from './_courses/CoursesListWidget';

const CourseListPage = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

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
        <TagListWidget items={tagList} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>
      <div className="content">
        <CoursesListWidget items={filtredCourseList} />
      </div>
    </div>
  );
}

export default CourseListPage;
