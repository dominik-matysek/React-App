import { useState } from "react";
import "./Toggler.css"

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIsHappy = () => {
        // This is actually not the recommended way to do things like incrementation etc, but more about it later
        setIsHappy(!isHappy);
    };
    const incrementCount = () => {
        // This is actually not the recommended way to do things like incrementation etc, but more about it later
        setCount(count+2);
    }
    return  (
        <div>
        <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? "╰(*°▽°*)╯" : "(┬┬﹏┬┬)}"}</p>
        <p>{count}</p>
        <b onClick={incrementCount}>+</b>
        </div>
    )
}