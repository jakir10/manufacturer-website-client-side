import React, { useEffect, useState } from "react";
import Tool from "./Tool";
import ToolPart from "./TooPart";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://moto-parts-gear-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div>
      <div className="my-24 text-primary text-center text-2xl font-bold uppercase">
        <h2>All Tools</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.map((toolPart) => (
          <ToolPart key={toolPart._id} part={toolPart}></ToolPart>
        ))}
      </div>
    </div>
  );
};

export default Parts;
