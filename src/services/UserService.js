import config from "../config";
const userService = {};
var store = [];

/**
 * Save user input in the store & keeps the size of the list upto the size defined in configurations.
*/
userService.trackValue = (userInput) => {
    try {
        /* Gets last user input value. */
        let previousInput = store[0];

        /** Push new input to start of store list using queue. */
        store.unshift(userInput);

        /** Keep fixed size of array i.e. 10 in order to avoid exploitation of memory & pop the last element if the size exceeds. */
        if (store.length == (config.resultSize + 1)) {
            /** Remove the last element of the array if the list size exceeds the limit size defined in configurations. */
            store.pop();
        }

        /** Return null if the current input it the first element inserted in the store. */
        if (previousInput == undefined) previousInput = null;

        return previousInput;
    } catch (error) {
        throw error;
    }
}

/**
 * Return the list of items in the store 
*/
userService.getHistory = () => {
    try {

        return store;
    } catch (error) {
        throw error;
    }
}

export default userService;