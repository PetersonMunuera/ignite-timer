import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_ACTIVE_CYCLE_AS_FINISHED = 'MARK_ACTIVE_CYCLE_AS_FINISHED',
}

export function createNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  }
}

export function markActiveCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_ACTIVE_CYCLE_AS_FINISHED,
  }
}
