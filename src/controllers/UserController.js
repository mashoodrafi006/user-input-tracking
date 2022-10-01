import response from "../response";
import userService from "../services/UserService";

const userController = {};
userController.trackValue = async (req, res) => {
    try {
        const { input } = req.body;
        const store = userService.trackValue(input);

        return res.json(response.SUCCESS(store));
    } catch (error) {

        return res.json(response.INTERNAL_SERVER_ERROR);
    }
}

userController.getHistory = async (req, res) => {
    try {
        const storeOfValues = userService.getHistory();

        return res.json(response.SUCCESS(storeOfValues));
    } catch (error) {

        return res.json(response.INTERNAL_SERVER_ERROR);
    }
}

export default userController;
