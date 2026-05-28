"use client";

import { useState, useEffect } from "react";

const PASSWORD = "nyt-golden";
const STORAGE_KEY = "recap-auth";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  if (authed === null) return null;
  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="w-full max-w-sm px-8">
        <div className="mb-8">
          <div className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "var(--accent-sf)" }}>
            Golden Handshake Recap
          </div>
          <div className="font-serif text-[22px] font-bold leading-tight text-text">
            Golden Handshake
          </div>
          <div className="font-sans text-[11px] text-text-muted mt-1">
            New York Times × Summer Friday Engagement
          </div>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter password"
            autoFocus
            className="w-full px-4 py-3 bg-bg-alt border border-border font-sans text-[13px] text-text placeholder:text-text-muted/40 outline-none transition-colors"
            style={{ ["--tw-ring-color" as string]: "var(--accent-sf)" }}
            onFocus={e => (e.target.style.borderColor = "var(--accent-sf)")}
            onBlur={e => (e.target.style.borderColor = "")}
          />
          {error && (
            <p className="font-sans text-[11px] text-red-500">
              Incorrect password.
            </p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-3 text-white font-sans text-[11px] font-bold uppercase tracking-[0.14em] hover:opacity-90 transition-opacity cursor-pointer"
            style={{ background: "var(--accent-sf)" }}
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
