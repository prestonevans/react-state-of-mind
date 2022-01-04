import { useState } from "react"

export default function StateComp(props) {
    const [count = 10, setCount ] = useState(props.count)

    function add() {
        setCount(count + 1)
    }
    function sub() {
        if(count == 0) return
        setCount(count - 1)
    }
    return(
        <div className="counter">
            <button onClick={sub}>-</button>
            <p>{count}</p>
            <button onClick={add}>+</button>
        </div>
    )
}