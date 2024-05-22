import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function CyclesReducer(state: CyclesState, actions: any) {
  switch (actions.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(actions.payload.newCycle)
        draft.activeCycleId = actions.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CYCLE: {
      const activeCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (activeCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[activeCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    }
    case ActionTypes.MARK_ACTIVE_CYCLE_AS_FINISHED: {
      const activeCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (activeCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[activeCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }

    default:
      return state
  }
}
