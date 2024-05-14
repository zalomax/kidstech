import TagItem from "./TagItem";

const TagList = ({ items }: any) => {

  return (
    <ul className="tag-list">
      <li className="tag-item active">
        Все темы
      </li>
      {items.map((item: any) => {
        return (
          <TagItem key={`tag-${item}`} item={item} />
        )
      })
      }
    </ul>
  );
}

export default TagList;
