import { FC, memo } from "react";
import TagList from "./TagList";
import './styles.scss'

type PropsType = {
  items: string[] | null,
  selected: string | null,
  handleSelected: (e: React.MouseEvent<HTMLElement>) => void
}

const TagListWidget: FC<PropsType> = ({ items, selected, handleSelected }) => {  
  if (!items) {
    return <div>У вас пока нет тем</div>
  }

  return (
    <div className="tag-widget-wrapper">
      <TagList items={items} selected={selected} handleSelected={handleSelected} />
    </div>
  );
}

export default memo(TagListWidget);
