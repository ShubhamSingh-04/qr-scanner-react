import React, { useRef, useState, useEffect } from 'react';
import QrScanner from 'qr-scanner';

const QrCodeScanner = () => {
  const videoRef = useRef(null);
  const [qrResult, setQrResult] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const scannerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      scannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          setQrResult(result.data);
          // Optionally, stop scanning after a successful scan:
          // scannerRef.current.stop();
        },
        {
          onDecodeError: (err) => setErrorMsg(err.message || String(err)),
        }
      );

      scannerRef.current.start().catch((err) => setErrorMsg(err.message || String(err)));

      // Cleanup on component unmount
      return () => {
        scannerRef.current?.stop();
      };
    }
  }, []);

  const handleRescan = () => {
    setQrResult('');
    setErrorMsg('');
    scannerRef.current?.start().catch((err) => setErrorMsg(err.message || String(err)));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>
      {(
        <>
          <video
            ref={videoRef}
            className="w-[80vw] sm:w-[50vw] h-auto max-h-[60vh] border border-gray-300 rounded"
          />
          {!qrResult && errorMsg && <p className="mt-2 text-red-600">{errorMsg}</p>}
        </>
      )}
      <p className="mb-4"><strong>Result:</strong> {qrResult}</p>
    </div>
  );
};

export default QrCodeScanner;
