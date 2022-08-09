import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //入力するTODOの値
  const [todoText, setTodoText] = useState("");
  //未完了のTODOリスト
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  //完了のTODOリスト
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  //TODOが入力された時にステートの値を変更
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンを押した時に入力されたTODOの値を未完了のTODOリストに追加
  const onClickAdd = () => {
    //何も入力せずに追加ボタンを押した場合処理を中断
    if (todoText === "") return;

    //分割代入を利用して未完了のTODOリストに入力されたTODOを追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //入力ボックスの値を空に
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <div></div>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <div></div>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
