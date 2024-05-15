import { FC } from "react";
import TagList from "./TagList";
import './styles.scss'

type PropsType = {
  items: string[] | null,
  selectedTag: string | null,
  setSelectedTag: (selectedTag: string | null) => void
}

const TagListWidget: FC<PropsType> = ({ items, selectedTag, setSelectedTag }) => {
  if (!items) {
    return <div>У вас пока нет тем</div>
  }

  return (
    <div className="tag-widget-wrapper">
      <TagList items={items} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
    </div>
  );
}

export default TagListWidget;
