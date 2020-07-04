import {selector} from 'recoil'

import { todoListState, todoListFilterState } from '../atoms/todoList'

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: any) => item.isComplete)
      case 'Show Uncompleted':
        return list.filter((item: any) => !item.isComplete)
      default:
        return list
    }
  }
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item: any) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  } 
})