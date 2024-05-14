import TagList from "./TagList";
import './styles.scss'

const TagListWidget = ({ items }: any) => {
  return (
    <div className="tag-widget-wrapper">
      <TagList items={items} />
    </div>
  );
}

export default TagListWidget;
