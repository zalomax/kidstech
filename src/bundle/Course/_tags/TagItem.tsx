import { FC } from "react";

type PropsType = {
  item: string | null,
  selectedTag: string | null,
  setSelectedTag: (selectedTag: string | null) => void
}

const TagItem: FC<PropsType> = ({ item, selectedTag, setSelectedTag }) => {
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
