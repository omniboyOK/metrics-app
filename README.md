# Event Micro Service

## Event model

| variable | type   | content                                            |
| -------- | ------ | -------------------------------------------------- |
| project  | String | project name where event is listened               |
| event    | String | event name (ex: newMessage)                        |
| params   | Object | an object with custom params that you want to save |
| date     | Date   | self explanatory                                   |

## Example

``` json
    {
        "project": "myproject",
        "event": "eventname",
        "date": "2022-01-25T12:00:00Z",
        "params": {
            "user": "pepito"
        }
    }
```

## Endpoints

`POST /events/save`

Receives an event object