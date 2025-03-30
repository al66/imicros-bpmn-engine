module.exports = [
    {
        case: "Emit job",
        analyse: false,
        commands: [
            {
                command: "CreateInstance"
            },
            {
                command: "RaiseEvent",
                eventId: "incomingRequest", 
                payload: { 
                    userId: "0969cfa5-f658-44ba-a429-c2cd04bef375", 
                    email: "john.doe@my-company.com",
                    locale: "en-US",
                    confirmationToken: "...signed JSON web token..."
                }
            }
        ],
        result: {
            jobs: [{
                taskDefinition: {  type: "store.add", retries: undefined},
                data: {
                    object: {
                        email: "john.doe@my-company.com",
                        locale: "en-US",
                        confirmationToken: "...signed JSON web token..."
                    }
                }
            }]
        }
    },
    {
        case: "Commit job",
        analyse: false,
        commands: [
            {
                command: "CreateInstance"
            },
            {
                command: "RaiseEvent",
                eventId: "incomingRequest", 
                payload: { 
                    "userId": "0969cfa5-f658-44ba-a429-c2cd04bef375", 
                    "email": "john.doe@my-company.com",
                    "locale": "en-US",
                    "confirmationToken": "...signed JSON web token..."
                }
            },
            {
                command: "CommitJob",
                task: "store.add",
                result: {
                    "storeId": "my store uuid"
                }   
            }
        ],
        result: {
            throwing: [{
                eventId: 'endEvent',
                payload: {
                    email: 'john.doe@my-company.com',
                    locale: 'en-US',
                    token: '...signed JSON web token...',
                    storeId: 'my store uuid'
                }
            }]
        }
    }
]
