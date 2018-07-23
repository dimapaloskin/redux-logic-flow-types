// @flow

// eslint-disable-next-line no-unused-vars
import type { Dispatch } from 'redux'

declare module 'redux-logic' {
  declare export type Logic<Action, State> = {
    type?: $PropertyType<Action, 'type'>,
    cancelType?: $PropertyType<Action, 'type'>,
    debounce?: number,
    throttle?: number,
    warnTimeout?: number,
    latest?: boolean,
    validate?: Validate<Action, State>,
    transform?: Transform<Action, State>,
    processOptions?: {
      dispatchReturn?: boolean,
      dispatchMultiple?: boolean,
      sucessType?: (() => Action) | $PropertyType<Action, 'type'>,
      failType?: (() => Action) | $PropertyType<Action, 'type'>,
    },
    process: Process<Action, State>,
  }

  declare export type GetState<State> = () => State

  declare type Deps<Action, State> = { getState: GetState<State>, action: Action }

  declare export type Transform<Action, State> = (Deps<Action, State>, next: () => any) => any

  declare export type Validate<Action, State> = (
    Deps<Action, State>,
    allow: () => any,
    reject: () => any,
  ) => any

  declare export type Process<Action, State> = (
    Deps<Action, State>,
    dispatch: Dispatch<Action>,
    done: () => any,
  ) => any

  declare function createLogicMiddleware(logic: Array<Object>, options: Object): any
  declare function createLogic<A, S>(input: Logic<A, S>): Logic<A, S>
}
