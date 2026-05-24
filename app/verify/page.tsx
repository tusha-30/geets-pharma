"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { QrCode, ScanLine, CheckCircle2, AlertCircle } from "lucide-react";

const validCodes: Record<string, { product: string; batch: string; mfg: string }> = {
  "GP-001-2026-A1": {
    product: "Geetcef-500 (Cefixime 500 mg Tablet)",
    batch: "GP-001-2026-A1",
    mfg: "January 2026",
  },
  "GP-003-2026-B2": {
    product: "Geetcef Inj (Ceftriaxone 1g Injection)",
    batch: "GP-003-2026-B2",
    mfg: "February 2026",
  },
  "GP-005-2026-C3": {
    product: "Geetkids Syr (Paracetamol 250 mg/5 ml)",
    batch: "GP-005-2026-C3",
    mfg: "March 2026",
  },
};

export default function VerifyPage() {
  const [code, setCode] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<"valid" | "invalid" | null>(null);
  const [productInfo, setProductInfo] = useState<
    (typeof validCodes)[string] | null
  >(null);

  const handleVerify = (inputCode?: string) => {
    const c = (inputCode ?? code).trim().toUpperCase();
    setScanning(true);
    setResult(null);
    setProductInfo(null);

    setTimeout(() => {
      setScanning(false);
      const info = validCodes[c];
      if (info) {
        setResult("valid");
        setProductInfo(info);
      } else {
        setResult("invalid");
      }
    }, 1800);
  };

  const simulateScan = () => {
    setScanning(true);
    setResult(null);
    setProductInfo(null);
    setTimeout(() => {
      const demoCode = "GP-001-2026-A1";
      setCode(demoCode);
      setScanning(false);
      setResult("valid");
      setProductInfo(validCodes[demoCode]);
    }, 2200);
  };

  return (
    <>
      <PageHeader
        eyebrow="Product Verification"
        title="Verify Your Product"
        desc="Scan the QR code on your packaging or enter the batch code to confirm authenticity."
      />

      <section className="section bg-white">
        <div className="container max-w-2xl">
          <div className="card overflow-hidden p-0">
            <div className="relative bg-ink px-6 py-10 text-center text-white">
              <div
                className={`relative mx-auto flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-dashed ${
                  scanning
                    ? "border-brand-400 animate-pulse"
                    : "border-white/30"
                }`}
              >
                {scanning ? (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="animate-scan-line absolute left-0 right-0 h-0.5 bg-brand-400 shadow-[0_0_12px_#3f9b6a]" />
                  </div>
                ) : null}
                <QrCode className="h-20 w-20 text-white/80" />
              </div>
              <p className="mt-4 text-sm text-gray-300">
                {scanning
                  ? "Scanning QR code..."
                  : "Point your camera at the QR code on the product packaging"}
              </p>
              <button
                onClick={simulateScan}
                disabled={scanning}
                className="btn-primary mt-5 !bg-brand-500"
              >
                <ScanLine className="h-4 w-4" />
                {scanning ? "Scanning..." : "Simulate QR Scan"}
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="text-center text-sm text-ink-mute">— or enter batch code manually —</div>

              <div className="mt-5 flex gap-3">
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="e.g. GP-001-2026-A1"
                  className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
                <button
                  onClick={() => handleVerify()}
                  disabled={scanning || !code.trim()}
                  className="btn-primary shrink-0"
                >
                  Verify
                </button>
              </div>

              {result === "valid" && productInfo && (
                <div className="mt-6 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100">
                  <div className="flex items-center gap-2 text-brand-700">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-semibold">Authentic Product Verified</span>
                  </div>
                  <dl className="mt-4 space-y-2 text-sm">
                    <div>
                      <dt className="text-ink-mute">Product</dt>
                      <dd className="font-medium text-ink">{productInfo.product}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-mute">Batch No.</dt>
                      <dd className="font-medium text-ink">{productInfo.batch}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-mute">Manufacturing Date</dt>
                      <dd className="font-medium text-ink">{productInfo.mfg}</dd>
                    </div>
                  </dl>
                </div>
              )}

              {result === "invalid" && (
                <div className="mt-6 rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-semibold">Verification Failed</span>
                  </div>
                  <p className="mt-2 text-sm text-red-600">
                    This code could not be verified. Please check the packaging
                    and contact us via WhatsApp for safety reporting if you
                    suspect a counterfeit product.
                  </p>
                </div>
              )}

              <p className="mt-6 text-xs text-ink-mute">
                Demo codes: GP-001-2026-A1, GP-003-2026-B2, GP-005-2026-C3
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
