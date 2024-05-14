import TagList from "./TagList";
import './styles.scss'

const TagListWidget = ({ items, selectedTag, setSelectedTag }: any) => {
  return (
    <div className="tag-widget-wrapper">
      <TagList items={items} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
    </div>
  );
}

export default TagListWidget;
