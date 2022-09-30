import userService from "../services/UserService";

const userController = {};

//add comments
//check docker
userController.trackValue = async (req, res) => {
    try {
        const { input } = req.body;
        const store = userService.trackValue(input);

        return res.json({ output: store });
    } catch (error) {

        return res.json({ message: error });
    }
}

userController.getHistory = async (req, res) => {
    try {
        const storeOfValues = userService.getHistory();

        return res.json({ output: [...storeOfValues] });
    } catch (error) {

        return res.json({ message: error });
    }
}

export default userController;
