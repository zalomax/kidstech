const TagItem = ({ item, selectedTag, setSelectedTag }: any) => {
  const isActive = item === selectedTag;

  return (
    <li className={`tag-item ${isActive ? 'active' : ''}`}
      onClick={() => setSelectedTag(item)}
    >
      {item}
    </li>
  );
}

export default TagItem;
