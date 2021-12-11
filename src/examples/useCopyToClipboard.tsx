import React, { useState } from 'react';
import useCopyToClipboard from '../utilities/hooks/useCopyToClipboard';

const useCopyToClipboardExample = () => {
  const [inputText, setInputText] = useState('');
  const [copiedValue, copy] = useCopyToClipboard();

  return (
    <div>
      <span>Enter Text: </span>
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <button onClick={(_) => copy(inputText)}>Click to Copy</button>
      <br />
      <br />
      <strong>Copied Value: </strong> <span>{copiedValue}</span>
    </div>
  );
};

export default useCopyToClipboardExample;
