import React, { useState } from "react";

function ViewMore() {
        const [isActive, setActive] = useState("false");
        const handleToggle = () => {
          setActive(!isActive);
        };
        
        return (
          <div className={isActive ? "one" : "two"}>
            <h1>Hello react</h1>
            <button onClick={handleToggle}>Toggle class</button>
          </div>
        );
}

export default ViewMore;