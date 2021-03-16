# employee_react_dev


## Understanding react: A complete overview of architecture.

React is a connection of puzzle pieces that form the bigger picture (and display).

It's a triangle or upside down tree where:

    1. app is the top of the triangle. App is where the react routes are.

    2. The second level: Pages. Pages are where we display information. In this case we have 1 page--the Home.js

        - This is where we have states and hooks.

        - States and hooks are accessible to the child components. Remember, it's almost nested... like the upside down tree analogy.

    3. Components: child components can see the changes to states and hooks. 

        - these are the smallest part of the puzzle...

State and Hooks... What are they?

    ### State & Hooks are DATA STORAGE. They perform the same task.
    
    To first understand state understand global class variables.
        Global Class Variable -- data available everywhere in the file. generally, Global Class Variables are not accessible outside of that file. (Children cannot see changes) So how do we rectify this problem? State.

State: State is more basic... kinda like having the training wheels on. State is limited to class components
    Keying into state: you'll see `extends` ... i.e. 
    
    ```
    class MyClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = { attribute : "value" };
        }
    }

    ```

Hooks: Training wheels are off. You maintain everything.

    






child components display UI

Use effect updates, mounts or unmounts a component to unrender a component/turn off any listeners (fact check)
