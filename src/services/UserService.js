import config from "../config";
const userService = {};
var store = [];

userService.trackValue = (userInput) => {
    try {
        let previousInput = store[0];
        store.unshift(userInput);

        if (previousInput == undefined) previousInput = null;

        return previousInput;
    } catch (error) {
        throw error;
    }
}

userService.getHistory = () => {
    try {
        let currentStateOfStore = [...store.slice(0, config.resultSize)];

        return currentStateOfStore;
    } catch (error) {
        throw error;
    }
}

export default userService;