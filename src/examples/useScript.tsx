import React from 'react';
import useScript from '../utilities/hooks/useScript';

declare const TEST_SCRIPT: any;

export default function useScriptExample() {
  const status = useScript(
    'https://pm28k14qlj.codesandbox.io/test-external-script.js'
  );
  return (
    <div>
      <div>
        Script status: <b>{status}</b>
      </div>
      {status === 'ready' && (
        <div>
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )}
    </div>
  );
}
