import { allNav } from "./allNav";


//! PRIMER METODO
// export const getNav = ( role ) => {
//   const finalNavs = [];
//   
//   for ( let i = 0; i < allNav.length; i++ ) {
//     if ( role === allNav[i].role ) {
//       finalNavs.push(allNav[i]);
//     }
//   }
// 
//   return finalNavs;
// }

//! SEGUNDO METODO
export const getNav = ( role ) => {
  return allNav.filter( nav => nav.role === role );
}