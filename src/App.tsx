import './App.css'

import {CounterWithSetMenu} from "./components/CounterWithSetMenu/CounterWithSetMenu.tsx";


function App() {
    return (
        <div className={"appContainer"}>
            {/*<Counter/>*/}
            <CounterWithSetMenu/>
        </div>
    )
}

export default App
