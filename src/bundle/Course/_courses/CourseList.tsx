import { FC } from "react";
import { CourseListType } from "../../../data/v1/docs_courses/types";
import CourseItem from "./CourseItem";

type PropsType = {
  items: CourseListType
}

const CourseList: FC<PropsType> = ({ items }) => {

  return (
    <div className="course-list">
      {items.map((item) => {
        return (
          <CourseItem key={item.id} item={item} />
        )
      })
      }
    </div>
  );
}

export default CourseList;
