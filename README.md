# Event Micro Service

## Event model

| variable | type   | content                                            |
| -------- | ------ | -------------------------------------------------- |
| project  | String | project name where event is listened               |
| event    | String | event name (ex: newMessage)                        |
| params   | Object | an object with custom params that you want to save |
| date     | Date   | self explanatory                                   |

## Endpoints

`POST /events/save`

Receives an event object