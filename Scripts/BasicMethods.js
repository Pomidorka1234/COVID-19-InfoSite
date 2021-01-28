/**
 * find similar variant of a given word in a sentence
 * @param {String} match the given matching sentence to find
 * @param {String} sentence the sentence to find the match in
 * @returns {Boolean} whether the match variant is found in the sentence
 */
function findVariance(match, sentence) {
    for(let i = 0; i < sentence.length; i++) {
        if (sentence[i] == match[0]) {
            for (let j = 1; j < match.length; j++) {
                i++;
                if (sentence[i] == match[j]) {
                    if (j == match.length - 1)
                        return true;
                    continue;
                }
                break;
            }
        }
    }
    return false;
}

export function addNumbers(a, b) {
    alert(a + b);
}