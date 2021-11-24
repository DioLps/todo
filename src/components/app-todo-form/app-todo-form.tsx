import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import state from '../store/store';
import { Todo } from '../store/todo.model';

@Component({
  tag: 'app-todo-form',
  styleUrl: 'app-todo-form.scss',
  shadow: true,
})
export class AppTodoForm {
  @State() public value: string;

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  private isEdit: boolean;

  private selectedTodo: Todo;

  constructor() {
    this.isEdit = Boolean(this.match.params.id);
  }

  public componentWillLoad(): void {
    if (this.isEdit) {
      this.selectedTodo = state.todos.find((todo: Todo) => String(todo.id) === this.match.params.id);
      this.value = this.selectedTodo.label;
    } else {
      this.value = '';
    }
  }

  public handleSubmit(e: any): void {
    e.preventDefault();
    if (this.isEdit) {
      state.todos = state.todos.map((todo: Todo) => {
        if (String(todo.id) === this.match.params.id) {
          this.selectedTodo.label = this.value;
        }
        return this.selectedTodo;
      });
    } else {
      state.todos.push(new Todo({ id: Date.now(), label: this.value }));
    }
    history.back();
  }

  public handleChange(event: any): void {
    if (event.target.value !== '') {
      this.value = event.target.value;
    }
  }

  public render(): any {
    return (
      <form class="todo-form">
        <p class="todo-form__label">{this.match.params.id ? 'Edit' : 'Add'} Todos</p>
        <sl-input autofocus class="todo-form__field" type="text" required value={this.value} onInput={e => this.handleChange(e)}></sl-input>
        <sl-button class="todo-form__submit" type="default" size="medium" circle onClick={e => this.handleSubmit(e)}>
          <sl-icon name="check"></sl-icon>
        </sl-button>
      </form>
    );
  }
}
