# React Notes #

# CDN => Content Delivery Network

# CORS => Cross Origin Resource Share - Allows to interact resource with different domain

# NPM => Package Manager
 npm int - create package.json

# Bundler => Webpack, Parcel, Vit
 - Compress 
 - Minimize

# Parcel
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
  # useState()
    - State variable in React - State changed then re-render component
    - Whenever state component is update then react re-render this component
    - const [dataList, setDataList] = useState();
  # useEffect() - 
    - Called after component render
    - Callback function and Dependency Array
    - useEffect(()=>{}, [])
