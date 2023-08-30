import React from 'react';
import { getValue } from '../react/pickFromSyntheticEvent';
import { preventDefault } from '../react/preventDefault';
import { stopPropagation } from '../react/stopPropagation';

export function compose<U>(...fns: Function[]) {
  return <E>(initialValue: any): U => fns.reduceRight((prevValue, fn) => fn(prevValue), initialValue);
}

export function pipe<U>(...fns: Function[]) {
  return <E>(initialValue: any): U => fns.reduce((prevValue, fn) => fn(prevValue), initialValue);
}

export function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

//example for compose/pipe

// function InputExample({ value, onChange }: any) {
//   return (
//     <input
//       value={value}
//       onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
//       onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
//     />
//   );
// }
