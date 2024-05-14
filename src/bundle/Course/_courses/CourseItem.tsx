const CourseItem = ({ item }: any) => {
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
