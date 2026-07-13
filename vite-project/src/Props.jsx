import { createContext } from "react";
export const UserContext =createContext();
function ContextProvider(children){
    const [user,setUser]=useState('Harry');
    return(
        <UserContext.Provider>
            <children/>
        </UserContext.Provider>
    );
}
export default ContextProvider; 