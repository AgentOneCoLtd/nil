export type nil = null | undefined;

/**
 * check if val is nil type (null or undefined) or not
 * @param  val anything
 * @return     true if nil, else false
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNil(val: any): val is nil {
    return val === null || val === undefined;
}
