export type nil = null | undefined;

/**
 * check if val is nil type (null or undefined) or not
 * @param  val anything
 * @return     true if nil, else false
 */
// tslint:disable-next-line no-any
export function isNil(val: any): val is nil {
    return val === null || val === undefined;
}
