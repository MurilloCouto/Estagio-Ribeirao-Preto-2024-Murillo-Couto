function inverterString(string) {
  let inverted = "";
  for (let i = string.length - 1; i >= 0; i--) {
    inverted += string[i];
  }
  return inverted;
}

let stringOriginal =
  "2s !otiuuuum raçrofse em otemorp ,agav assen ecnahc amu meed em ,rovaf roP";

let stringInvertida = inverterString(stringOriginal);

console.log(stringInvertida);
