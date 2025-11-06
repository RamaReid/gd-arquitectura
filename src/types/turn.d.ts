declare module 'turn.js' {
  interface TurnOptions {
    width?: number;
    height?: number;
    autoCenter?: boolean;
    gradients?: boolean;
    acceleration?: boolean;
    page?: number;
    elevation?: number;
    duration?: number;
    turnCorners?: string;
    when?: {
      turning?: (event: any, page: number, view: any) => void;
      turned?: (event: any, page: number, view: any) => void;
      start?: (event: any, page: number, view: any) => void;
      end?: (event: any, page: number, view: any) => void;
    };
  }

  interface JQuery {
    turn(options?: TurnOptions): JQuery;
    turn(method: 'destroy'): JQuery;
    turn(method: 'page', page?: number): JQuery | number;
    turn(method: 'next' | 'previous'): JQuery;
    turn(method: 'size'): { width: number; height: number };
    turn(method: string, ...args: any[]): any;
  }
}

declare module 'jquery' {
  interface JQueryStatic {
    (selector: string | Element | Document): JQuery;
    (callback: (jq: JQueryStatic) => void): void;
  }
}