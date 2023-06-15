## Personal Shopping List
 A shopping list application that has state management using Context and Hooks. The data is fetched from https://my-json-server.typicode.com/sabinamp/shoppinglist/lists . Each list has a number of items.
 - using the useNavigate hook shipped with React Router version 6. 
If you choose to modify the history stack, you need to pass the delta in the history stack to which you want to go. For example, navigate(-1) is equivalent to clicking the browser's back button.
 # Using the Context API for state management

 - reusable function components ae in the components directory
- components that represent a route are in the pages directory.
-  The page components are using the useDataFetching Hook.