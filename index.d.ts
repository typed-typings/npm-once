declare function once <T extends Function> (fn: T): T & { called: boolean };

declare namespace once {
  export function proto (): void;
}

export = once;
