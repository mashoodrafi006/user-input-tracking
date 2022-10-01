const responseStatus = {};

responseStatus.INTERNAL_SERVER_ERROR = {
    status: 500,
    message: 'Internal server error.',
    output: []
};

responseStatus.INVALID_REQUEST = {
    status: 400,
    message: 'Invalid request.',
    output: []
};

responseStatus.SUCCESS = (response) => {
    return {
        status: 200,
        message: 'Request successfull.',
        output: response
    }
};

export default responseStatus;