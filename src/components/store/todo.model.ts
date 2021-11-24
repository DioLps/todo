export class Todo implements TodoModel {
  id: number;
  label: string;
  checked?: boolean;
  constructor(params?: TodoModel) {
    this.id = params.id || -1;
    this.label = params.label || '';
    this.checked = params.checked || false;
  }
}
export interface TodoModel {
  id: number;
  label: string;
  checked?: boolean;
}
