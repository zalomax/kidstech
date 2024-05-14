import { useEffect } from 'react';
import useLoadCourseList from './hooks/useLoadFreeTaskList';
import './styles.scss'
import TagListWidget from './_tags/TagListWidget';
import CoursesListWidget from './_courses/CoursesListWidget';

const CourseListPage = () => {
  const { isLoading, loadCourseList, courseList, tagList } = useLoadCourseList()

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
        <TagListWidget items={tagList} />
      </div>
      <div className="content">
        <CoursesListWidget items={courseList}/>
      </div>
    </div>
  );
}

export default CourseListPage;
