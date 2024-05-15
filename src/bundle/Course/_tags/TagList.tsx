import { FC, memo } from "react";
import TagItem from "./TagItem";
import { allTagItem } from "../hooks/const";

type PropsType = {
  items: string[],
  selected: string | null,
  handleSelected: (e: React.MouseEvent<HTMLElement>) => void
}

const TagList: FC<PropsType> = ({ items, selected, handleSelected }) => {
  const finalItems = [allTagItem, ...items]

  return (
    <ul className="tag-list">
      {finalItems.map((item: any) => {

        return (
          <TagItem
            key={`tag-${item}`}
            item={item}
            selected={selected}
            handleSelected={handleSelected}
          />
        )
      })
      }
    </ul>
  );
}

export default memo(TagList);
