// ------------------------------------
// Constants
// ------------------------------------
export const TEST_BTN = 'TEST_BTN'

// ------------------------------------
// Actions
// ------------------------------------

export function testBtn (value) {
  console.log(value);
  return {
    type: TEST_BTN,
    payload: value
  }
}

export const actions = {
  testBtn
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TEST_BTN]: (state) => {
    return ({...state})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 1;
export default function testReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
