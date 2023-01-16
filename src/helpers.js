/**
 * choice: returns a randomly selected item from aray of items
 * @param {array} items 
 * 
 * @returns randomly selected item
 */
function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
}

/**
 * remove: removes the first matching item from items, if item exists, and 
 * returns it. Otherwise returns undefined.
 * @param {array} items 
 * @param {*} item
 * 
 * @returns deleted element or undefined.
 */
function remove(items, item) {
    const removeIndex = items.indexOf(item);

    
    return removeIndex === -1 
        ? undefined
        : items.splice(removeIndex, 1)[0];
}


export { choice, remove };