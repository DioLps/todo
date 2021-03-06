/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppList {
    }
    interface AppRoot {
    }
    interface AppTodoForm {
        "history": RouterHistory;
        "match": MatchResults;
    }
}
declare global {
    interface HTMLAppListElement extends Components.AppList, HTMLStencilElement {
    }
    var HTMLAppListElement: {
        prototype: HTMLAppListElement;
        new (): HTMLAppListElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTodoFormElement extends Components.AppTodoForm, HTMLStencilElement {
    }
    var HTMLAppTodoFormElement: {
        prototype: HTMLAppTodoFormElement;
        new (): HTMLAppTodoFormElement;
    };
    interface HTMLElementTagNameMap {
        "app-list": HTMLAppListElement;
        "app-root": HTMLAppRootElement;
        "app-todo-form": HTMLAppTodoFormElement;
    }
}
declare namespace LocalJSX {
    interface AppList {
    }
    interface AppRoot {
    }
    interface AppTodoForm {
        "history"?: RouterHistory;
        "match"?: MatchResults;
    }
    interface IntrinsicElements {
        "app-list": AppList;
        "app-root": AppRoot;
        "app-todo-form": AppTodoForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-list": LocalJSX.AppList & JSXBase.HTMLAttributes<HTMLAppListElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-todo-form": LocalJSX.AppTodoForm & JSXBase.HTMLAttributes<HTMLAppTodoFormElement>;
        }
    }
}
