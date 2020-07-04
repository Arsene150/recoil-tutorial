import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'

import { todoListState } from '../../atoms/todoList' 

import { filteredTodoListState } from '../../selectors/TodoList'

import { TodoListStats } from './TodoListStats'
import { TodoListFilters } from './TodoListFilters'
import { TodoItemCreator } from './TodoItemCreator'

export const TodoList: FC = () => {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      {/* <TodoListStats> */}
      {/* <TodoListFilters> */}
      <TodoItemCreator>

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}>
      ))}
    </>
  )
}