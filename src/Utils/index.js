// import Axios from "axios"


const TOKEN_KEY = 'jwt'

export const login = () => {
    
    localStorage.setItem(TOKEN_KEY, 'Eykuadkdakdk281368124')
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}



// export const loginAs = () => {
//     if(localStorage.getItem(TOKEN_KEY)) {
//         Axios.get('/profile',{
//             headers: localStorage.getItem(TOKEN_KEY)
//         }).then((res) => {
//             if(res.data.role_id == 20)
//                 props.history.push('/ngadmin')
//             else if(res.data.role_id == 21)
//                 props.history.push('/404')
//         })
//     }
// }

export const isLogin = ()=> {
    if(localStorage.getItem(TOKEN_KEY)) {
        return true
    }
    return false
}