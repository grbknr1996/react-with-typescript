import React from "react";
import { Child, ChildAsFc } from "./Child";
const Parent: React.FC = () => {
  return (
    <div>
      <Child color="red" onClick={() => console.log("click!!")} />

      <ChildAsFc color="red" onClick={() => console.log("click!!")}>
        sdhfhjsd
      </ChildAsFc>
    </div>
  );
};
export default Parent;
