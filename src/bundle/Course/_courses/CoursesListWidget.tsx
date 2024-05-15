import { FC } from "react";
import CourseList from "./CourseList";
import './styles.scss'
import { CourseListType } from "../../../data/v1/docs_courses/types";

type PropsType = {
  items: CourseListType | null
}

const CoursesListWidget: FC<PropsType> = ({ items }) => {
  if (!items) {
    return <div>У вас пока нет курсов</div>
  }

  return (
    <CourseList items={items} />
  );
}

export default CoursesListWidget;
