# Souqalmal

## Get Started

1. **Install [Node] version v10.13.0,  install mongodb version v4.4.4 or install/start docker** 
2. **Clone this repository.** - `git clone https://github.com/mashoodrafi006/user-input-tracking`
3. **Run project.** - `docker-compose up`

### Project Details

A project to return user input history

## Code Style

-   Install Prettier plugin for auto code refactor
-   Install ESLint plugin

## Testing

-   Use JEST for testing

## APIs
- /api/track/trackValue
    - Description: Takes user input and saves that in the store
    - Request type: POST
    - Pass the following in JSON body => 
        {
            "input": "first input"
        }

- /api/track/getHistory
    - Description: Returns last 10 values from the store.
    - Request type: GET