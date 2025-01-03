# React Notes #

# CDN => Content Delivery Network

# CORS => Cross Origin Resource Share - Allows to interact resource with different domain

# NPM => Package Manager
 npm int - create package.json

# Bundler => Webpack, Parcel, Vit
 - Compress 
 - Minimize

# Parcel (is Bundler)
  npm install -D parcel
  - Dev Build
  - Local Serve
  - HMR = Hot Module Replacement
  - File Watching Algorithm - Written in C++
  - Caching - Faster Builds
  - Image Optimization
  - Minification
  - Bundling
  - Compressing File and Size
  - Consistent Hashing
  - Code splitting
  - Differential Bundling - Support older browser
  - Diagnostic - Beautiful Error
  - Error Handling
  - HTTPs
  - Tree Shaking - Remove unused code


# Package.json
 "parcel": "^2.8.3"   // ^ Minor Version update
 "parcel": "~2.8.3"   // ~ Major Version update

# NPX => Execute Package
 npx parcel index.html    //(execute parcel - run server)

# Babel - Compiler/Transpiler

# JSX => Bad API(Malicious) - Handled Cross Side Scripting
 JSX-> ReactElement-> React(JS Object)-> HTML Element(Render on Browser)

# Function Component - Normal Javascript function

# Props - Is Object and Passing argument to function

# ConfigDrivenUI - UI is different data as per location 

# .map => Always give key and should be Unique //Do not used index
resObjList.map((restaurant) => <Card key={restaurant.info.id} resData={restaurant} />)

# Export/Import two type -> Default & Named
  export default Header;
  Import Header from "..file"

  export const Header;
  Import {Header} from "..file"

# React use Reconciliation Algorithm (React Fiber Architecture) in React 16
# Diff Algorithm (Difference - Old | New) - Dom manipulation
# Virtual DOM 
  - Representation of Actual/Real Dom

# Monolith Architecture - All in one project - UI|BE|Auth|DB|SMS|Email 
# Microservice Architecture - Separate project - UI|BE|Auth|DB|SMS|Email

# React Hooks -> (Normal JS utility function)
  # useState() -> const [dataList, setDataList] = useState();
    - State variable in React - State changed then re-render component
    - Whenever state component is update then react re-render this component

  # useEffect() - useEffect(()=>{}, [])
    - Called after component render
    - Callback function and Dependency Array
  # If no dependency array -> useEffect is called on every render (again and again call)
  # If dependency array is empty [] -> useEffect is called on initial render (just once)
  # If dependency array has value [] -> useEffect is called every time dependency is updated

  # useRouteError() - catch any errors that may occur during routing
    - const err = useRouteError() // import {useRouteError} from 'react-router-dom';

  # useParams() - access the parameters of the current route to manage the dynamic routes in the URL
    - const params = useParams(); // import {useRouteError} from 'react-router-dom';
    - const {restID} = useParams();  //de-construct object

  # createContext() - Component Props Drilling - avoid props drilling
    Context is on global space we can update at global place

# Routing - npm i react-router-dom {createRouterBrowser, RouterProvider, Outlet}
  # Server Side - Call server API and render HTML page
  # Client Side
  import createRouterBrowser - path | element | errorElement
  const appRouter = createBrowserRouter([{path: "/",element: <AppLayout />}]);

  import RouterProvider
  <RouterProvider router={appRouter} />

# LifeCycle
  1. Initialization - Class| Function
  2. Mounting - componentDidMount() - Constructor
  3. Updating - render() - HTML DOM
  4. UnMounting - componentWillUnMount()

 # Mounting Cycle - 
  Constructor(Dummy Data) 
  Render (Dummy Data)
    <HTML DummyData /> 
  componentDidMount
    <API CALL>
    <this.setState>
  # Update
    <API CALL>
    Render (API Data)
      <HTML APIData />
    componentDidUpdate

# Lazy Loading (On demand loading) - Chunking/Code Splitting/Dynamic Bundling or Import 
  import React, {lazy, Suspense} from "react";

  const Grocery = lazy(() => {import "./components/Grocery"});
  <Suspense fallback={<Shimmer />}><Grocery /> </Suspense>

# Apply CSS ways - 
  CSS | SCSS | SASS | Styled-Component | Material UI | Bootstrap | Chakra UI | Ant Design | Tailwind CSS

# High order component

# Controlled and Un-controlled component
  Controlled - controlling Parent component to child component using props
  Un-controlled - child component controlling itself

# Lifting the state up - Centralized State Management | Component Communication
  Parent component passes the count state and the incrementCount function down to childComponent

# Props Drilling
  
  We can keep data at Global space any component can access
  # createContext 
  const UserContext = createContext({loggedUser: 'Prashant Dhavale'});
  # useContext 
  const {loggedUser} = useContext(UserContext);

# Redux- library offers state management and easy debug - used Data Layer
  Redux is not mandatory - Small size application
  Redux Store is big JS object and kept global central place
  Similar - Zustand library

  # Redux Toolkit Installation - 
  - npm install @reduxjs/toolkit
  - npm install react-redux

  Click           Dispatch        Reducer    Modify redux store        Subscribe      Automatically Updates
Add Button ----->  Action  ----->  fn()   -----> cart slice     ----->  Selector  ----->  UI cart 
                                                    

    - Installation Redux toolkit
    - Build our store
    - connect our store to app
    - slice (Cart Slice)
    - despatch (action)
    - selector (subscribe)


  1. Create store - import {configureStore} from @reduxjs/toolkit
    const appstore = configureStore({
      
    });

  2. Provide stor to application - import {Provider} from react-redux
      <Provider store={appstore}>
        // Body
      </Provider>

  3. cerate cartSlice  import {createSlice} from @reduxjs/toolkit
     - name, initialState
     const cartSlice = createSlice({
      name: cart,
      initialState: { items:[] },
      reducers: {
        addItem: (state, action) => {state.items.push(action.payload)},
        removeItem: (state, action) => {state.items.pop(action.payload)},
        clearCart: (state) => {state.items.length=0},
      }
     })

  4. Subscribing to store useSelector((store)=>store.cart.items) hook

  5. Add item useDispatch(addItem("Pizza")) hook
     
# Type of Testing (Developer)
  - Unit Testing (Individual module - Like Header)
  - Integration Testing (Testing by code - Events, rendering)
  - End to End Testing (E2E) - Start from first page to end page (across flow) Cypress, Papetiao Salenium

  1. React Testing Library (DOM Testing Library)
    - npm install -D @testing-library/react
  2. Jest - Javascript testing framework
    - npm i -D jest
  3. Install Babel configuration
    - npm i --save-dev babel-jest @babel/core @babel/preset-env
  4. configure babel.config.js
      module.exports = {
        presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
      };
  5. Configure Parcel config file to disable default babel file
  6. Jest Configuration
     npx jest --init
  7. if(Jest V is > v28) Install JSDOM Library Separately
     npm i -D jest-environment-jsdom 
  8. install @babel/preset-react -to make JSX work in Jest test cases
     npm i -D @babel/preset-react
  9. Config @babel/preset-react -inside babel config
     npm i -D @babel/preset-react
  10. install @testing-library/jest-dom
      npm i -D @testing-library/jest-dom
  