# Date helper

A date helper for private projects

Installation & Usage
--------------------

date-helper is primarily ES6 module. See it in action:

```bash
npm i date-helper
```

```javascript
import {changeTimeZoneDate, timeAGO, safariDateWorkaround} from "date-helper"

changeTimeZoneDate(dateToChange, newTimeZone)
timeAGO(date, 'a go')
safariDateWorkaround(date)
```