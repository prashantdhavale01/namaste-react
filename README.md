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

  