# Date helpr

A date helper for private projects

Installation & Usage
--------------------

date-helpr is primarily ES6 module. See it in action:

```bash
npm i date-helpr
```

```javascript
import {changeTimeZoneDate, timeAGO, safariDateWorkaround} from "date-helpr"

changeTimeZoneDate(dateToChange, newTimeZone)
timeAGO(date, 'a go')
safariDateWorkaround(date)
```