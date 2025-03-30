const { parse } = require("uuid");

module.exports = [
    {
        case: "Two events",
        analyse: {
            parse: false,
            steps: false,
            events: false,
            result: false
        },
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
                task: "smtp.send",
                result: {
                    receiver: "my mail receiver",
                    subject: "my mail subject",
                    body: "my mail body",
                    attachments: []
                }   
            }
        ],
        result: {
            throwing: [{
                eventId: 'intermediateEvent',
                payload: {
                    withEmail: 'john.doe@my-company.com',
                    withToken: '...signed JSON web token...'
                }
            },{
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
