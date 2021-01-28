/**
 * find similar variant of a given word in a sentence
 * @param {String} match the given matching sentence to find
 * @param {String} sentence the sentence to find the match in
 * @returns {Boolean} whether the match variant is found in the sentence
 */
function findVariance(match, sentence) {
    for(let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() == match[0].toLowerCase()) {
            for (let j = 1; j < match.length; j++) {
                i++;
                if (sentence[i].toLowerCase() == match[j].toLowerCase()) {
                    if (j == match.length - 1)
                      return true;
                    continue;
                }
                break;
            }
        }
    }
}