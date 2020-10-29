// Работа с интерфейсами
const concat = (a: string, b: string): string => a + b;
concat("ABC", "DEFG"); // 'ABCDEFG'

// Работа с интерфейсами
type howIDoltType = string;
type simeArrayType = Array<string | number>;

interface MyHometaskSchema {
	howIDoIt: howIDoltType;
	simeArray: simeArrayType;
	withData: Array<{
		howIDoIt: howIDoltType;
		simeArray: simeArrayType;
	}>;
}

const MyHometask: MyHometaskSchema = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// Типизация функций, используя Generic
interface MyArray<T> {
	[N: number]: T;
	reduce(fn: (acc: T, e: T, index: number, array: T[]) => T): T;
	// overload
	reduce<U>(fn: (acc: U, e: T, index: number, array: T[]) => U, initialValue: U): U;
}

const arr: MyArray<number> = [1, 2, 3, 4];
arr.reduce((acc, e) => acc + e); // 10
arr.reduce<Array<number>>((acc, e, i) => {
	acc[i] = e * 2;
	return acc;
}, []); // [2, 4, 6, 8]
