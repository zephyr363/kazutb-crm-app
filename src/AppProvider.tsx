import type { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store/store"

const AppProvider: FC<{children: ReactNode}> = ({children}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    )
}

export default AppProvider