import { useState } from "react";
import "./Toggler.css"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy =() => {
        // This is actually not the recommended way to do things like incrementation etc, but more about it later
        setIsHappy(!isHappy);
    }
    return <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? "╰(*°▽°*)╯" : "(┬┬﹏┬┬)}"}</p>;
}