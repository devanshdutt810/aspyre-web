import { PopUpProps } from "@/types/popup";
import { useContext, useEffect, useState } from "react";

export default function PopUp({ content, colorCode = "#f06b04" }: PopUpProps) {
  const [Del, SetDel] = useState(false);
  const [Style, SetStyle] = useState(
    "flex gap-5 p-5 m-5 w-fit rounded-xl text-xl",
  );

  const bgStyle = { backgroundColor: colorCode };

  useEffect(() => {
    setTimeout(() => {
      SetStyle("flex gap-5 p-5 m-5 w-fit rounded-xl text-xl hidden");
    }, 2000);
  }, []);

  return (
    <>
      {!Del && (
        <div className="fixed top-5 right-5 z-99">
          <div className={Style} style={bgStyle}>
            <h1 className="text-white">{content}</h1>
          </div>
        </div>
      )}
    </>
  );
}
