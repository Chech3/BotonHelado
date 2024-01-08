import { useState } from "react";

const Boton = () => {
  const [cambio, setCambio] = useState(true);
  const [value, setValue] = useState(false);
  const estilo = {
    position: "absolute",
    top: "75px",
    left: "500px",
  };

  const estilo2 = {
    position: "absolute",
    top: "300px",
    left: "300px",
  };

  return (
    <>
      <div className="flex justify-center align-items-center my-5">
        <h1 className="text-2xl">Te gustaria comerte un helado conmigo :D</h1>
      </div>

      <div className="flex justify-center align-items-center">
        <div
          style={{
            touchAction: "manipulation",
          }}
        >
          <button
            onMouseEnter={() => {
              setCambio(!cambio);
            }}
            onTouchStart={() => {
              setCambio(!cambio);
            }}
            style={cambio ? estilo : estilo2}
            className="cursor-default shadow-none transition-none bg-red-500 text-white py-3 px-5 rounded-md hover:bg-blue-600"
          >
            No :(
          </button>
        </div>

        <button
          className="bg-blue-500 text-white my-1 py-3 px-5 rounded-md hover:bg-blue-600 mr-10"
          onClick={() => {
            setValue(true);
          }}
        >
          Si :D
        </button>
      </div>
      <div className="flex justify-center align-items-center text-3xl my-10 transition-all duration-600 ease-in-out animate-bounce">
        {value && <h1>siiiuu vamoos pues </h1>}
      </div>
    </>
  );
};

export default Boton;
