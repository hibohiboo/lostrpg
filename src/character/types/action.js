// @flow
import type { Action as SrcAction } from '../actionTypes'

export type ReduxInitAction = {
  type: '@@INIT',
}

export type Action = ReduxInitAction | SrcAction
