import React, { useState } from "react";
import DecoderInput from "./DecoderInput";
import { reversedText, numbersToText } from "./Decoders";
import DecoderLine from "./DecodedLine";

function DecoderBlock() {
  const [inputText, setInputText] = useState("");

  const sendInputText = (inputText) => {
    setInputText(inputText);
  };

  return (
    <div className="decoderBlock">
      <DecoderInput sendInputText={sendInputText} />
      <DecoderLine
        inputText={inputText}
        decoderName="ReversedText"
        decoder={reversedText}
      />
      <DecoderLine
        inputText={inputText}
        decoderName="NumbersToText"
        decoder={numbersToText}
      />
    </div>
  );
}

export default DecoderBlock;
