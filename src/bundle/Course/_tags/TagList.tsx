import { FC } from "react";
import TagItem from "./TagItem";

type PropsType = {
  items: string[] | null,
  selectedTag: string | null,
  setSelectedTag: (selectedTag: string | null) => void
}

const TagList: FC<PropsType> = ({ items, selectedTag, setSelectedTag }: any) => {

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
