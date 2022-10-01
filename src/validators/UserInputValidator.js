import config from "../config";
import response from '../response/index';
const userInputValidator = {};

/**
 * @param req
 * @param res
 * @param next
 */
userInputValidator.validateUserInput = async (req, res, next) => {
    try {
        const { input } = req.body;

        /**
         * Request to contain field `input` in body with input value size under define size in configurations.   
        */
        if (input != null && input.length <= config.allowedInputLength) {

            next();
        } else {
            return res.json(response.INVALID_REQUEST);
        }
    } catch (error) {
        return res.json(response.INTERNAL_SERVER_ERROR);
    }

}

export default userInputValidator;