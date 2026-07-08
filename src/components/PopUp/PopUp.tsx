import { PopUpProps } from "@/types/popup";
import React, { useState } from "react";

export default function PopUp({ content, colorCode = "#f06b04" }: PopUpProps) {
  const [Del, SetDel] = useState(false);
  function handleClose() {
    SetDel(true);
  }
  const bgStyle = { backgroundColor: colorCode };
  const styles = `flex gap-5 p-5 m-5 w-fit rounded-xl text-xl`;

  return (
    <>
      {!Del && (
        <div className="fixed top-5 right-5 z-9">
          <div className={styles} style={bgStyle}>
            <h1 className="text-white">{content}</h1>
            <button onClick={handleClose} className="text-white">
              🆇
            </button>
          </div>
        </div>
      )}
    </>
  );
}
