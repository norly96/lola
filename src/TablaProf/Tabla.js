import React, { useState } from "react";
import info from "../data.json";
const Tabla = () => {
  const [data, setData] = useState(info);
  const [flag, setFlag] = useState(true);

  const handlechange = (e, x, y) => {
    let ver = true;

    let val = e.target.value.toString();
    console.log(e.target.value);
    console.log(val, " es este");
    for (var i = 0; i < val.length; i++) {
      if (val.charAt(i) < 1 || val.charAt(i) > 7) ver = false;
    }
    if (val.length > 1) ver = false;
    if (ver === true) {
      let aux = data;
      aux.LUGARES[x][y] = val.length === 0 ? 0 : parseInt(e.target.value);
      aux.PUNTOS[x][y] = 8 - (val.length === 0 ? 0 : parseInt(e.target.value));
      let tot = [0, 0, 0, 0, 0, 0, 0];
      for (let x = 0; x < aux.PUNTOS.length; x++) {
        for (let y = 0; y < aux.PUNTOS[x].length; y++) {
          tot[y] += aux.PUNTOS[x][y];
        }
      }
      aux.TOTALES = tot;
      let lug = [1, 1, 1, 1, 1, 1, 1];
      for (let x = 0; x < tot.length; x++) {
        let cont = 1;
        for (let y = 0; y < tot.length; y++) {
          if (tot[x] < tot[y]) cont++;
        }
        lug[x] = cont;
      }
      aux.POSICIONES = lug;
      setData(aux);
      console.log(aux);
      setFlag(!flag);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          borderRadius: "4px",
        }}
      >
        <div style={{ width: "200px" }}>Deportes</div>
        {data.FACULTADES.map((x, index) => (
          <div
            style={{
              width: "120px",
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {x}
          </div>
        ))}
      </div>

      {data.LUGARES.map((x, indexx) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            borderRadius: "4px",
          }}
        >
          <div style={{ width: "200px", border: "1px solid black" }}>
            {data.DEPORTES[indexx]}
          </div>
          {data.LUGARES[indexx].map((y, indexy) => (
            <input
              style={{
                width: "120px",
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
              }}
              value={
                data.LUGARES[indexx][indexy] !== 0
                  ? data.LUGARES[indexx][indexy]
                  : ""
              }
              onChange={(e) => handlechange(e, indexx, indexy)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tabla;
