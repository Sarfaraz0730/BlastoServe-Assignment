
import {createStore } from 'redux'
import { Reducer } from './reducer'

export const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log("entire Store is here Veeru: " , store.getState())