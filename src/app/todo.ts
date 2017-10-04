export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  created_time: Object;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.created_time = new Date();
  }
}
