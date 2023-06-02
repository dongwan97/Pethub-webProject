import { MdRemoveCircleOutline } from "react-icons/md";

const PicListItem = (favs, onRemove) => {
  const { id, pic } = favs;
  return (
    <div className="PicListItem">
      <div className="pic">{pic}</div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default PicListItem;
