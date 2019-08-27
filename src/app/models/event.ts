import { Timestamp } from 'rxjs';

export interface EventRequest {
  key: string;
  name: string;
  date: Date;
  serviceKey: string;
  userUid: string;
  questions: any[];
  dateCreated: Date;
}
