import { wordList } from "./wordbank";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  try {
    const wordArr = wordList;    
    const todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    const wordSet = new Set(wordArr);
    return { wordSet, todaysWord };
  } catch (error) {
    console.error("Error generating word set:", error);
    return { wordSet: new Set(), todaysWord: null };
  }
};
