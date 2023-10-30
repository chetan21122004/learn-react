import React from "react";
import { Header,Footer ,Outlet} from "./components";


function Layout() {
    
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;