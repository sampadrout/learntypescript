export function findVowelPositions(s: string): string[] {
    // TODO: implement findVowelPositions without using any built-in string methods
    // first convert the s string to array
    // then call a for loop to iterate over every array element of the string array to check whether its in volwel string array ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    // if yes add that i to the vowel array till all the string array element finished comparision
    // return that array
    
    let array: string[] = Array.from(s);

    
    return array;
}

console.log(findVowelPositions("Hello WORLD"));