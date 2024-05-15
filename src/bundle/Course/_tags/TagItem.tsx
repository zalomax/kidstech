import { FC, memo } from "react";

type PropsType = {
  item: string | null,
  selected: string | null,
  handleSelected: (e: React.MouseEvent<HTMLElement>) => void
}

const TagItem: FC<PropsType> = ({ item, selected, handleSelected }) => {
  const isActive = item === selected;

  return (
    <li className={`tag-item ${isActive ? 'active' : ''}`}
      onClick={handleSelected}
      data-tag={item}
    >
      {item}
    </li>
  );
}

export default memo(TagItem);
