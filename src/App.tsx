import './App.css'

import {CounterWithSetMenu} from "./components/CounterWithSetMenu/CounterWithSetMenu.tsx";
import {CounterWithReduxToolkit} from "./components/CounterWithReduxToolkit/CounterWithReduxToolkit.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {Counter} from "./components/Counter/Counter.tsx";


function App() {
    return (
        <div className={"appContainer"}>
            <Counter/>
            <CounterWithSetMenu/>
            <Provider store={store}>
                <CounterWithReduxToolkit/>
            </Provider>

        </div>
    )
}

export default App
