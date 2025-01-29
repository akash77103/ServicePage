import { createContext, useContext,useEffect,useState } from "react";

export const AuthContext=createContext()

 export const AuthProvider=({children})=>{
    const [token, settoken] = useState(localStorage.getItem("token"))
    const [user,setUser]=useState("")
    const [isLoading, setisLoading] = useState(true)
    const [services, setservices] = useState([])
    const authorizationToken=`Bearer ${token}`;
    const storetokeninLS=(servertoken)=>{
        settoken(servertoken)
        return localStorage.setItem('token',servertoken)
    }
    let isLoggedIn=!!token;
    const LogoutUser=()=>{
        settoken('')
            return localStorage.removeItem('token')
        
    }
       
    const userAuthentication=async ()=>{
            try {
                setisLoading(true)
               const response= await fetch("${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/auth/user",
               {
                method: "GET",
                headers:{
                    Authorization:authorizationToken,
                }
               })

               if(response.ok){
                const data=await response.json();
                console.log("user data",data.userData);
                
                setUser(data.userData)
                setisLoading(false)
               }
               else{
                setisLoading(false)
                console.log("Error fetching user data");
                
               }
            } catch (error) {
                console.log("Error fetching user data")
            }
        }
        
       const getServices=async()=>{
            try {
                const response=await fetch("${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/data/service",{
                    method:"GET",
                })
                if(response.ok){
                    const data=await response.json();
                    console.log(data.msg)
                    setservices(data.msg)
                }
            } catch (error) {
                console.log(`services error:${error}`);
                
            }
       }

       useEffect(()=>{
        getServices();
        userAuthentication();
       },[])
    
    return (
    <AuthContext.Provider value={{isLoggedIn,storetokeninLS,LogoutUser,user,services,authorizationToken,isLoading}}  >
        {children}
    </AuthContext.Provider>
    )
 }
export const useAuth=()=>{
    return useContext(AuthContext)
}
 