// https://mosya.dev/type-challenges/challenge-string-to-union

// 問題
// 文字列をUnion型に変換するStringToUnion<T>を実装してください。

type StringToUnion<T extends string> = ;

type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

