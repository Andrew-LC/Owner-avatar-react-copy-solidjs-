import * as React from "react";


{/*------------ Types -------------------------------*/}
interface ForProps {
    each: any[],
    fallback?: React.ReactNode,
    children: React.ReactNode
}


{/*------------ Components ---------------------------*/}


//For Component inspired by Solid JS
function For({ each, fallback, children }: ForProps) {
  const namedFunc = children;

  return (
    <>
      {
        each.length === 0 ?
        fallback:
        each.map((item, index) => namedFunc(item, index))
      }
    </>
  );
}


export { For }
