import { Suspense } from "react";
import { useRoutes } from "react-router-dom";



export function Router({ allRoutes }) {
  
  const routes = useRoutes([...allRoutes]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {
        routes
      }
    </Suspense>
  );
}
