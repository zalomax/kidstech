import CourseList from "./CourseList";
import './styles.scss'

const CoursesListWidget = ({ items }: any) => {
  return (
      <CourseList items={items} />
  );
}

export default CoursesListWidget;
