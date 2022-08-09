import React from "react";

export const InputTodo = (props) => {
  //propsで親から関数を受け取って処理に入れる
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
