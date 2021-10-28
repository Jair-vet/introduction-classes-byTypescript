
export const printObject = ( argument: any ) => {
  console.log( argument );
   
} 

// Funcion convencional
export function genericFunction<T>( argument: T ){
    return argument;
}

// Funcion de Flecha
export const  genericFunctionArrow = <T>( argument: T ) => argument;
