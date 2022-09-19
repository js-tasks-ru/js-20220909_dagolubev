/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

    const object = {};

    for (const prop of fields) {
        if (prop in obj && obj.hasOwnProperty(prop) ) {
            object[prop] = obj[prop];
        }
    }

    return object;
};
