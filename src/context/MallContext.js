import { createContext, useEffect, useState, useContext } from "react";


const MallContext = createContext({});
const MallContextProvider = ({ children }) => {
    const [mallName, setMallName] = useState(null);
    const [parkingNo, setParkingNo] = useState(null);
    const [zone, setZone] = useState(null);
    return(
        <MallContext.Provider value={{ mallName, setMallName, parkingNo, setParkingNo, zone, setZone}}>
            {children}
        </MallContext.Provider>
    );


}

export default MallContextProvider;

export const useMallContext = () => useContext(MallContext);