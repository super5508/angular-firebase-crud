import { Timestamp } from 'rxjs';

export class Service {
  key: string;
  name: string;
}

interface Option {
  name: string;
  value: string;
}

export class Question {
  key: string;
  type: string;
  title: string;
  placeholder: string;
  options: Option[];
  validation: {
    required: boolean;
    maxLength: number;
    pattern: string;
    validationMessage: string;
  };

  constructor() {
    this.key = '';
    this.title = '';
    this.type = '';
    this.placeholder = '';
    this.options = [];
    this.validation = {
      required: false,
      maxLength: 9999,
      pattern: '',
      validationMessage: 'Mess'
    };
  }
}
