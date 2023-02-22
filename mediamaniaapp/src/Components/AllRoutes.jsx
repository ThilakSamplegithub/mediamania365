import {Routes,Route} from "react-router-dom"
import Pricing from "../Pages/Pricing"
import Blog from "../Pages/Blog"
// import Navbar from "./Navbar"
import NavigationBar from "./NavigationBar"
const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<NavigationBar/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
        </>
    )
}
export default AllRoutes