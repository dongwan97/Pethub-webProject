import { MdAdd } from "react-icons/md";
import { useState, useCallback } from "react";
import "./TodoInsert.css";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="체크해야 할 건강정보가 있나요 ?"
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="TodoInsertButton">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
