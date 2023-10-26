import React from "react";
import KaniText from "../assets/text_kani_white.png";

function DiaryPage() {
  return (
    <div>
      <div className="h-16 bg-purple-500 shadow-2xl">
        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
      </div>
    </div>
  );
}

export default DiaryPage;
