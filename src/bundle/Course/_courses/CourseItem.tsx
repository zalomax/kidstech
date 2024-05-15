import { FC } from "react";
import { ICourse } from "../../../data/v1/docs_courses/types";

type PropsType = {
  item: ICourse
}

const CourseItem: FC<PropsType> = ({ item }) => {
  return (
    <div className="course-item">
      <div
        className="img-block"
        style={{ backgroundColor: item.bgColor }}
      >
        <img src={item.image} alt={item.name} />
      </div>
      <div className="name-block">
        {item.name}
      </div>
    </div>
  );
}

export default CourseItem;
