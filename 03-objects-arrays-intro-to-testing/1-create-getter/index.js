/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

    const pathKeys = path.split('.');

    return function (object = undefined) {

        function getValue(obj, [prop, ...rest]) {

            if (obj != undefined) {
    
                if (rest.length == 0) {
    
                    return obj[prop];
            
                } else {
    
                    return getValue(obj[prop], rest);
        
                }
            }
        }
    
        return getValue(object, pathKeys);
    }
}
