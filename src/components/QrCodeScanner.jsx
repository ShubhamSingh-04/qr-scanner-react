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
          scannerRef.current.stop();
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
    <div>
      <h1>QR Code Scanner</h1>
      {qrResult ? (
        <div>
          <p><strong>Result:</strong> {qrResult}</p>
          <button onClick={handleRescan}>Scan Again</button>
        </div>
      ) : (
        <>
          <video ref={videoRef} style={{ width: 320, height: 240 }} />
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        </>
      )}
    </div>
  );
};

export default QrCodeScanner;
