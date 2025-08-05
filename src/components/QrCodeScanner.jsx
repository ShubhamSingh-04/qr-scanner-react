import React, { useRef, useState, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import { useLocation } from 'react-router-dom';

// ✅ Set worker path for the QR scanner
QrScanner.WORKER_PATH = '/qr-scanner-worker.min.js';

const QrCodeScanner = () => {
  const videoRef = useRef(null);
  const scannerRef = useRef(null);
  const timeoutRef = useRef(null);
  const path = useLocation().pathname

  console.log(path)

  const [qrResult, setQrResult] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [dataToSend, setDataToSend] = useState('');

  useEffect(() => {
    if (videoRef.current) {
      // ✅ Initialize the QR scanner
      scannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          console.log('QR scanned:', result.data);
          setQrResult(result.data);
          setErrorMsg('');

          // SEND DATA
          setDataToSend(`{CODE: ${result.data}, for: ${path}}`)

          // ✅ Pause scanning and resume after 2 seconds
          scannerRef.current.stop();
          timeoutRef.current = setTimeout(() => {
            setQrResult(''); // Clear previous result for new scan
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

      // ✅ Start scanning
      scannerRef.current
        .start()
        .catch((err) => setErrorMsg(err.message || String(err)));

      // ✅ Cleanup on unmount
      return () => {
        scannerRef.current?.stop();
        clearTimeout(timeoutRef.current);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>

      <video
        ref={videoRef}
        className="w-[90vw] sm:w-[50vw] h-[50vh] max-h-[60vh] border border-gray-300 rounded"
      />

      {errorMsg && <p className="mt-2 text-red-600">{errorMsg}</p>}

      <p className="mt-4 text-lg">
        <strong>Result:</strong>{' '}
        {qrResult || <span className="text-gray-500">Waiting for scan...</span>}
      </p>

       <p className="mt-4 text-lg">
        <strong>Data to be sent:</strong>{' '}
        {`${dataToSend}` || <span className="text-gray-500">No data to send</span>}
      </p>
    </div>
  );
};

export default QrCodeScanner;
