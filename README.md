## redux-logic-flow-types

```js
import { createLogic } from 'redux-logic'
import type { Action } from '../actions'
import type { State } from '../reducers'

import type { Logic } from 'redux-logic'

const appInitLogic: Logic<Action, State> = createLogic({
  type: 'APP_INIT',
  latest: true,
  processOptions: {
    sucessType: 'APP_INIT_SUCCESS',
  },
  process({ getState, action }, dispatch, done) {
    const state = getState()

    console.log(state.app.thisPropertyDoesNotExists) // <-- warn

    done()
  },
})

```
