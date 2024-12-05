import { configureStore } from "@reduxjs/toolkit"
//import { createLogger } from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

//const logger = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    //middleware: (getDefaulMiddleware) => getDefaulMiddleware().concat(logger),
    //by default configure store will add some deafult middleware automatically
})

export default store