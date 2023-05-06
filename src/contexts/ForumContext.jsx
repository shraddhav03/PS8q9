import { useState, useEffect, createContext } from "react";
import { fakeFetch } from "../data/fakefetch";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/questions");
      if (response.status === 200) {
        setData(response.data.questions);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data && (
        <div>
          <ForumContext.Provider value={{ data }}>
            {children}
          </ForumContext.Provider>
        </div>
      )}
    </>
  );
};
