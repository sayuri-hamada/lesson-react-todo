import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //入力するTODOの値
  const [todoText, setTodoText] = useState("");
  //未完了のTODOリスト
  const [incompleteTodos, setIncompleteTodos] = useState([]);
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

  //タスクの削除機能
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //spliceを使用して配列から受け取った配列のインデックスを削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //タスクの完了機能
  const onClickComplete = (index) => {
    //完了ボタンが押された時の配列のインデックスを未完了のTODOから削除
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);
    setIncompleteTodos(newInCompleteTodos);

    //削除したTODOを完了のTODOに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  //タスクの戻す機能
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
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
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  {/* onClick内で引数を渡す場合はアロー関数を設定する */}
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
