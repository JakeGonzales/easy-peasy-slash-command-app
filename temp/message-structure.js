// @source: https://api.slack.com/docs/messages/builder?msg=%7B%22text%22%3A%22Looking%20for%20Group%22%2C%22attachments%22%3A%5B%7B%22title%22%3A%22PVP%22%2C%22fields%22%3A%5B%7B%22title%22%3A%22Players%22%2C%22value%22%3A%221%22%7D%5D%7D%2C%7B%22title%22%3A%22Details%22%2C%22text%22%3A%22Your%20message%20here%22%7D%2C%7B%22fallback%22%3A%22Respond%20to%20this%20LFG%20request%22%2C%22title%22%3A%22Respond%20to%20this%20LFG%20request%22%2C%22callback_id%22%3A%22lfg_1234_%22%2C%22color%22%3A%22%233AA3E3%22%2C%22attachment_type%22%3A%22default%22%2C%22actions%22%3A%5B%7B%22name%22%3A%22respond%22%2C%22text%22%3A%22Respond%22%2C%22type%22%3A%22button%22%2C%22value%22%3A%22respond%22%7D%5D%7D%5D%7D

{
    "text": "Looking for Group",
    "attachments": [
        {
            "fields": [
                {
                    "title": "Gametype",
                    "value": "PVP"
                }
            ]
        },
        {
            "fields": [
                {
                    "title": "Players",
                    "value": "1"
                }
            ]
        },
        {
            "title": "Details",
            "text": "Your message here"
        },
        {
            "fallback": "Respond to this LFG request",
            "title": "Respond to this LFG request",
            "callback_id": "lfg_1234_",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "respond",
                    "text": "Respond",
                    "type": "button",
                    "value": "respond"
                }
            ]
        }
    ]
}