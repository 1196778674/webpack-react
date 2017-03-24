// ------------------------------------
// Constants
// ------------------------------------
const TEST_BTN = 'TEST_BTN'

// ------------------------------------
// Actions
// ------------------------------------

function testBtn (value = 1) {
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
    console.log("state");
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 1;
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
