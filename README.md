# Overview

Convenience package to provide a composeWithTracker function for react-komposer 2.0.
The code for the composeWithTracker method is pasted from the suggested implementation
provided in the react-komposer repository.

# Usage

## composeWithTracker

Use the `composeWithTracker` function as you would use `compose`

```
import {composeWithTracker} from 'meteor/nicocrm:react-komposer-tracker'
import ContactEdit from 'mycomponents/ContactEdit'

const trackerContainer = composeWithTracker((props, onData) => {
  const contactId = props.params.id
  const listDataSub = Meteor.subscribe('Contact', contactId)

  if(listDataSub.ready()) {
    const contact = Contacts.findOne({Id: contactId})
    onData(null, {
      contact
    })
  }
})

return trackerContainer(ContactEdit)
```

You can pass options as the second parameter of the function.  See
[documentation](https://github.com/arunoda/react-komposer).

## setDefaults

Set global defaults for your compose method.  You cannot create a custom composition
function (as on [setDefaults](https://github.com/arunoda/react-komposer#set-defaults)),
but you can use this function instead in a similar way to setDefaults in react-komposer 1.0.

```
import React from 'react'
import {
  setDefaults
} from 'meteor/nicocrm:react-komposer-tracker';
import Spinner from '../../shared/components/generic/Spinner'
import Error from '../../shared/components/generic/Error'

setDefaults({
  loadingHandler: () => <Spinner />,
  errorHandler: err => <Error error={err} />,
  pure: true
})
```

If you need to override the options on a per-container basis you can also pass
options to the `composeWithTracker` function (see above)

