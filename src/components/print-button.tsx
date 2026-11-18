"use client";
export default function PrintButton({ label }: { label: string }) {
  return (
    <button className="button primary" onClick={() => window.print()}>
      {label}
    </button>
  );
}
