/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

    const sorting = {
        asc:   1,
        desc: -1
    }
    
    const order = sorting[param];

    return [...arr].sort( (s1, s2) => {return order * s1.localeCompare(s2, ['ru','en'], {caseFirst : 'upper'})} );

}
