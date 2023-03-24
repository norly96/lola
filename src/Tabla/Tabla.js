import React, { useState, useEffect } from "react";
import styles from "./Tabla.module.css";
import  b  from "../assets/b.jpg"
import  logo1  from "../assets/logo1.png"

const Tabla = () => {
  const [facultades, setFacultades] = useState([]);
  const [deportes, setDeportes] = useState([]);
  const [lugares, setLugares] = useState([]);

  const getData = () => {
    fetch("./p.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        {
          setFacultades(myJson.FACULTADES);
          setDeportes(myJson.DEPORTES);
          setLugares(myJson.LUGARES);
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: "#143601",
          zIndex: "-1",
        }}
      >
        <img src={b} style={{ /* height: "100vh" */ }} alt="logo" />
      </div>

      <div style={{ display: "flex", flexDirection: "row",margin: "20px",justifyContent:"center", alignItems:"center"}}>
        <img style={{ marginRight: "17px" }} src={logo1} alt="" width={250} height={100}/>
          <h1 style={{ color: "white", fontFamily: "Tahoma" }}>Tabla de Resultados</h1>
          <img src={logo1} alt="" width={250} height={100}/>
      </div>


      <div style={{ display: "flex", flexDirection: "column", /*  width: "50%" */ }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
              background: "white",
              margin: "1px",
              borderRadius: "10px",
            }}
          >
            <strong>Facultad</strong>
          </div>
          {facultades.map((x, index) => (
            <label
              style={{
                width: "70px",
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
                background: "white",
                margin: "2px",
                borderRadius: "10px",
              }}
            >
              <strong> {x}</strong>
            </label>
          ))}
        </div>

        {lugares.map((x, indexx) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
                background: "white",
                margin: "1px",
                borderRadius: "10px",
              }}
            >
              <strong>{deportes[indexx]}</strong>
            </div>
            {lugares[indexx].map((y, indexy) => (
              <label
                style={{
                  width: "70px",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                  background: "#807F7F",
                  borderRadius: "10px",
                  margin: "2px",
                }}
              >
                {lugares[indexx][indexy]}
                
              </label>
            ))}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Tabla;
