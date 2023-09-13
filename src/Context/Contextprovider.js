import { useContext, createContext } from "react";

const Context = createContext();

function Contextprovider() {
  return;
  <Context.Provider>
    <div>Contextprovider</div>;
  </Context.Provider>;
}

export function usecontext() {
  return useContext(Context);
}

export default Contextprovider;
