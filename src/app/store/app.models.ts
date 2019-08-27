import { EventRequest } from '../models/event';

export interface AppState {
  readonly eventRequests: EventRequest[];
}
