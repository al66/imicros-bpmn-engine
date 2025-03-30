module.exports = [
    {
        case: "Start event to end event",
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
            }
        ],
        result: {
            throwing: [{
                eventId: 'endEvent',
                payload: {
                    email: 'john.doe@my-company.com',
                    locale: 'en-US',
                    token: '...signed JSON web token...'
                }
            }]
        }
    }
]
