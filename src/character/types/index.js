// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

export type State = _State
export type Action = _Action

export type GetState = () => State

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState
) => void | Promise<void>

type ThunkDispatch<A> = ThunkAction => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>
