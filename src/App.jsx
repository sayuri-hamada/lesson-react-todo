import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      {/* InputTodoコンポーネントに親要素の関数をpropsで渡す */}
      {/* 未完了のTODOが５つ以上になった時にdisabledを渡す */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {/* 未完了のTODOが５つ以上になった時にメッセージを表示する */}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは５個までです。</p>
      )}
      <InCompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
