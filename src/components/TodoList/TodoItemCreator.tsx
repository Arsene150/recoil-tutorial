import React, { FC, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { todoListState } from '../../atoms/todoList'

const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const setTodoList = useSetRecoilState(todoListState)

  let id: number = 0;
  const getId = () => {
    return id++;
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = ({target: {value}}: any) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator