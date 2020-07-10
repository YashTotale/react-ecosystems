import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo, markTodoAsCompleted } from "./actions";

const TodoList = ({
  todos = [{ text: "hello" }],
  onRemovePressed,
  onCompletedPressed,
}) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, i) => {
        return (
          <TodoListItem
            key={i}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          ></TodoListItem>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
