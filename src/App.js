import { useRoutes } from 'react-router';
import { routes } from "../src/routes/index";


const App = () => {
    return useRoutes(routes);
  };


  export default App;