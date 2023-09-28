import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // fetch('https://manufacturer-website-server-side-steel.vercel.app/tool')
    fetch("https://manufacturer-website-server-side-steel.vercel.app/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return [tools, setTools];
};
export default useTools;
