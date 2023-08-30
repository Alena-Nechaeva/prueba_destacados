import { assoc } from "../js/assoc";
//lib: nanoid

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

//var based on chat (assignId)
// export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);

//var after M5 was checked
export const assignId = assoc('id', generateRandomString);
export const generateId = <O extends object>(obj: O) => assignId(obj);