import {compose, setDefaults as setKomposerDefaults} from 'react-komposer'
import {Tracker} from 'meteor/tracker'

let myCompose = compose

export function composeWithTracker(reactiveMapper, options) {
  const loader = (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if(typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
  return myCompose(loader, options)
}

export function setDefaults(options) {
  myCompose = setKomposerDefaults(options)
}
