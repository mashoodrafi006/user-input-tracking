import httpMocks from 'node-mocks-http';
import userFixture from '../../fixtures/input';
import userService from '../../../services/UserService';
import userController from '../../../controllers/userController';

describe('User controller', () => {
    const functions = Object.keys(userController);

    test('It should contain all functions.', async () => {
        expect(functions).toContain('trackValue');
        expect(functions).toContain('getHistory');
    });

    test('Save user input.', async () => {
        const res = httpMocks.createResponse();
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/api/track/trackValue',
            body: {
                input: 'first input'
            },
        });

        const previousInputValue = jest.spyOn(userService, 'trackValue');
        const mockLoggedInUser = userFixture.userInput();
        previousInputValue.mockReturnValue(mockLoggedInUser);

        const result = await userController.trackValue(req, res);
        const data = res._getJSONData();

        expect(data.output).toBe(null);
        expect(data.status).toBe(200);
        expect(result.statusCode).toBe(200);
        previousInputValue.mockRestore();
    });

});
