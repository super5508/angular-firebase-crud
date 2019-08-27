import { EventRequest } from '../models/event';

export const ADD_REQUEST = 'ADD_REQUEST';

export function addRequestReducer(state: EventRequest[] = [], action) {
  switch (action.type) {
    case ADD_REQUEST:
      return [...state, action.payload];
    default:
      return state;
  }
}
