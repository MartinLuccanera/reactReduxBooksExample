# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

App flow

We tied an action creator to our book buttons (books list items) Whenever a user clicks on an item on the list
We call an action creator which dispatches an action. That action is automatically sent to all our
different reducers and for those reducers that care for that particular action (BOOK_SELECT type of action)
They returned a piece of state which is assembled as the global application state (redux) and then, that global state
is injected back into all the diff containers inside of our application the container then re-render 
and cause the view to update.