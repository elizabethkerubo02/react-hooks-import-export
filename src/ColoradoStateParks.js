import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVede from "./parks/MesaVerde"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
  MesaVede();
}



  export default ColoradoStateParks;
