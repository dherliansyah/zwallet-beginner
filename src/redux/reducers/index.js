import { combineReducers } from 'redux'
import Auth from "./Auth"
import Users from "./Users"
import Topup from "./Topup"
import Search from "./Search"

const reducers = combineReducers({
    Auth,
    Users,
    Topup,
    Search
})

export default reducers