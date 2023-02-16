type Vowels = {
  a: "a";
  e: "e";
  i: "i";
  o: "o";
  u: "u";
};

// Pick will pull the stated values from the type
type PickVowels = Pick<Vowels, "a" | "e" | "i">; // "a" | "e" | "i

// Omit will remove the stated values from the type
type OmitVowels = Omit<Vowels, "a" | "e">; // { i:"i", o:"o", u:"u" }

type KeyOfVowels = keyof OmitVowels; // "i", "o", "u"

// Usage with type safety
const myConst: KeyOfVowels = "w";

// To make eslint happy
export {};
