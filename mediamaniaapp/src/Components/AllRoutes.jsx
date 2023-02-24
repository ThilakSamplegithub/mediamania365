import {Routes,Route} from "react-router-dom"
import Pricing from "../Pages/Pricing"
import Blog from "../Pages/Blog"
// import Navbar from "./Navbar"
import NavigationBar from "./NavigationBar"
import TopOfNavBar from "./TopOfNavBar"
import LoginPage from "./LoginPage"
const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<TopOfNavBar/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        </>
    )
}
export default AllRoutes