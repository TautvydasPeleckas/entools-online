import React from "react";

function DecodedLine({ inputText, decoderName, decoder }) {
  return (
    <div className="decoderLine">
        {decoderName} - {decoder(inputText)}
    </div>
  );
}

export default DecodedLine;
