import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    hackNorthExperience?: {
      mount: (element: HTMLElement, path: string, navigate: (path: string) => void) => void;
      unmount: (element: HTMLElement) => void;
    };
  }
}

let experienceScript: Promise<void> | undefined;

function loadExperience() {
  if (experienceScript) return experienceScript;
  experienceScript = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/reference/experience.js";
    script.onload = () => resolve();
    script.onerror = () => {
      experienceScript = undefined;
      reject(new Error("The illustrated experience could not load."));
    };
    document.body.appendChild(script);
  });
  return experienceScript;
}

export function ReferenceExperience({ path = "/" }: { path?: string }) {
  const element = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const container = element.current;
    if (!container) return;
    loadExperience().then(() => {
      if (cancelled) return;
      window.hackNorthExperience?.mount(container, path, (destination) => {
        const url = new URL(destination, window.location.origin);
        const to = url.pathname;
        if (to === "/privacy" || to === "/code-of-conduct" || to === "/travel-guidelines" || to === "/") {
          void navigate({ to, hash: url.hash.replace(/^#/, "") });
        }
      });
    }).catch(() => { if (!cancelled) setFailed(true); });
    return () => {
      cancelled = true;
      window.hackNorthExperience?.unmount(container);
    };
  }, [navigate, path]);

  return <div className="reference-shell">
    <div ref={element} className="reference-experience" />
    {failed && <div className="experience-error">
      <h1>Hack the North</h1>
      <p>The page couldn’t load. Please try again.</p>
      <Button onClick={() => window.location.reload()}>Try again</Button>
    </div>}
  </div>;
}