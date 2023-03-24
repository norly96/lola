import React from "react";
const Tabla = () => {
  var f = new File([""], "guama.xlsx", {type: "text/plain"})
  return (
    <div>
      {" "}
      {console.log(XLSX.readFile(f))}
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: "#282c34",
        }}
      >
        <img src={logo} style={{ height: "100vh" }} alt="logo" />
      </div>
    </div>
  );
};

export default Tabla;
