import { useEffect, useState } from "react";
import { Router } from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";

function App() {

  const [ allRoutes, setAllRoutes ] = useState( [ ...publicRoutes ] );
  // console.log(allRoutes);

  useEffect( () => {
    const routes = getRoutes();
    setAllRoutes( prev => [ ...prev, routes ] );
  }, [] );
  return (
    // <Suspense fallback={<p>Loading...</p>}>
      <Router allRoutes={ allRoutes } />
    // </Suspense>
  )
}
export default App
