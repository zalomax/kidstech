import CourseItem from "./CourseItem";

const CourseList = ({ items }: any) => {

  return (
    <div className="course-list">
      {items.map((item: any) => {
        return (
          <CourseItem key={item.id} item={item} />
        )
      })
      }
    </div>
  );
}

export default CourseList;
