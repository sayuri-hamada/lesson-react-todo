import React from "react";
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};
export const InputTodo = (props) => {
  //propsで親から関数を受け取って処理に入れる
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* 未完了のTODOが５個以上になった時にdisabledする関数を受け取る */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
