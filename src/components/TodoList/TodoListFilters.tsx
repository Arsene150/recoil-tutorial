import React, {FC} from 'react'
import { useRecoilState } from 'recoil'

import { todoListFilterState } from '../../atoms/todoList'

const TodoListFilters: FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({target: {value}}: any) => {
    setFilter(value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters