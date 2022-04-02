import React, { useState } from "react";

function DecoderInput({ sendInputText }) {
  const [decodeText, setDecodeText] = useState("");

  return (
    <div className="decoderInput">
      <input
        type="text"
        onChange={(e) => {
          setDecodeText(e.target.value);
          sendInputText(decodeText);
        }}
      />
    </div>
  );
}

export default DecoderInput;
