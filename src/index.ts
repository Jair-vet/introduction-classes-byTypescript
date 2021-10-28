import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';

// printObject( 123 );
// printObject( new Date() );
// printObject( { a:1, b:2, c:3 } );
// printObject( [1,2,3,4,5,6,7,8,9,10] );
// printObject( 'Hola Mundo' );
const name: string = 'Jair';

console.log( genericFunctionArrow(3.1415563224).toFixed(2) );
console.log( genericFunction(new Date()).getDate );
console.log( genericFunction( name ).toUpperCase );



