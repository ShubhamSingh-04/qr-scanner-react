import React, { useRef, useState, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import { useLocation } from 'react-router-dom';
import dispatchAPI from '../services/apiDispacher';

// ✅ Set worker path for the QR scanner
QrScanner.WORKER_PATH = '/qr-scanner-worker.min.js';

const QrCodeScanner = () => {
  const videoRef = useRef(null);
  const scannerRef = useRef(null);
  const timeoutRef = useRef(null);
  const path = useLocation().pathname;

  const [qrResult, setQrResult] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [dataToSend, setDataToSend] = useState('');
  const [prevQrResult, setPrevQrResult] = useState('');

  const latestQrResultRef = useRef(qrResult);

  useEffect(() => {
    latestQrResultRef.current = qrResult;
    console.log(2)
  }, [qrResult]);

  useEffect(() => {
    if (videoRef.current) {
      scannerRef.current = new QrScanner(
        videoRef.current,
        async(result) => {
          setPrevQrResult(latestQrResultRef.current);
          console.log(1)
          setQrResult(result.data);
          setErrorMsg('');
          setDataToSend(`{CODE: ${result.data}, for: ${path}}`);



          if(qrResult != prevQrResult){
            const res = await dispatchAPI(path, {memberUniqueCode: result.data})
            console.log(res)
          }


          scannerRef.current.stop();
          timeoutRef.current = setTimeout(() => {
            scannerRef.current?.start().catch((err) =>
              setErrorMsg(err.message || String(err))
            );
          }, 500);
        },

        {
          onDecodeError: (err) => {
            console.warn('Decode error:', err);
            setErrorMsg(err.message || String(err));
          },
        }
      );

      scannerRef.current.start().catch((err) => setErrorMsg(err.message || String(err)));

      return () => {
        scannerRef.current?.stop();
        clearTimeout(timeoutRef.current);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>
       <h1 className="text-2xl font-bold mb-4">{path}</h1>


      <video
        ref={videoRef}
        className={`w-[90vw] sm:w-[50vw] h-[50vh] max-h-[60vh] border border-gray-300 rounded ${!errorMsg ? 'outline outline-offset-2 outline-2 outline-green-500' : ''}`}
      />

      {errorMsg && <p className="mt-2 text-red-600">{errorMsg}</p>}

      <p className="mt-4 text-lg">
        <strong>Result:</strong>{' '}
        {qrResult || <span className="text-gray-500">Waiting for scan...</span>}
      </p>

      <p className="mt-4 text-lg">
        <strong>Data to be sent:</strong>{' '}
        {dataToSend || <span className="text-gray-500">No data to send</span>}
      </p>

      <p className="mt-4 text-lg">
        <strong>Prev QR:</strong>{' '}
        {prevQrResult ? prevQrResult : <span className="text-gray-500">No Prev QR found</span>}
      </p>
    </div>
  );
};

export default QrCodeScanner;
