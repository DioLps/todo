import { Component, h } from '@stencil/core';
import state from '../store/store';

@Component({
  tag: 'app-list',
  styleUrl: 'app-list.scss',
  shadow: false,
})
export class AppList {
  public selectTodo(id: number, e: any): any {
    e.preventDefault();
    state.todos = state.todos.map(todo => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
        e.currentTarget.checked = todo.checked;
      }
      return todo;
    });
  }

  public deleteTodo(id: number, e): any {
    e.preventDefault();
    state.todos = state.todos.filter(todo => todo.id !== id);
  }

  public render(): any {
    return (
      <div class="app-list">
        <stencil-route-link url="/create" title="Create">
          <sl-button type="default" size="medium" circle>
            <sl-icon name="plus"></sl-icon>
          </sl-button>
        </stencil-route-link>
        <h3>Todos: </h3>
        <ul class="app-list__list">
          {state.todos.map(todo => {
            const url = '/edit/' + todo.id;
            return (
              <li class={'app-list__todo' + (todo.checked ? ' app-list__todo--checked' : '')}>
                <sl-checkbox onClick={e => this.selectTodo(todo.id, e)}>
                  <span class={'app-list__label' + (todo.checked ? ' app-list__label--checked' : '')}>{todo.label}</span>
                </sl-checkbox>
                <div class="app-list__buttons">
                  <stencil-route-link url={url} title="Edit">
                    <sl-button type="default" size="medium" circle>
                      <sl-icon name="pencil"></sl-icon>
                    </sl-button>
                  </stencil-route-link>
                  <sl-button title="Delete" type="danger" size="medium" circle onClick={e => this.deleteTodo(todo.id, e)}>
                    <sl-icon name="trash"></sl-icon>
                  </sl-button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
