// 解答
type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never;

type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"