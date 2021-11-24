import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  public render(): any {
    return (
      <section class="app-root">
        <header class="app-root__header">
          <stencil-route-link url="/" class="app-root__link">
            <h1 class="app-root__title">Stencil Todo's App Starter</h1>
          </stencil-route-link>
        </header>

        <main class="app-root__main-content">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-list" exact={true} />
              <stencil-route url="/create" component="app-todo-form" />
              <stencil-route url="/edit/:id" component="app-todo-form" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </section>
    );
  }
}
