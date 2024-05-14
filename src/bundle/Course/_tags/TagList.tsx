import TagItem from "./TagItem";

const TagList = ({ items, selectedTag, setSelectedTag }: any) => {

  return (
    <ul className="tag-list">
      <li className={`tag-item ${selectedTag ? '' : 'active'}`}
        onClick={() => setSelectedTag(null)}
      >
        Все темы
      </li>
      {items.map((item: any) => {

        return (
          <TagItem
            key={`tag-${item}`}
            item={item}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        )
      })
      }
    </ul>
  );
}

export default TagList;
