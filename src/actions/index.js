/* Changing state is what actions and actions creators are for. Almost everything in a redux application starts off with
 * an event triggered by user (either directly (clicking) or indirectly (Ajax request finishing loading up)).
 * All of these can optionally call an action creator. It is a function that returns an action, this action has a defined
 * type and may also have some data that further describes the action. Let's say that when
 * we click on book #2 from the list it is going to call an action creator (is a function that returns an object).
 * This object is then sent to all the different reducers (No matter how many of them we have, all of them are gonna
 * be informed of this change automatically). Reducers can choose (depending on the action via a "switch"
 * (like in switch-case) structure) to return a different piece of state (or not).
 * After all reducers have finished processing the action, that newly returned piece of state then gets piped in the
 * application state which is pumped back into our react application and causes all of our components to re-render.
 */