export type nil = null | undefined;

export function isNil(val: any): val is nil {
    return val === null || val === undefined;
}
