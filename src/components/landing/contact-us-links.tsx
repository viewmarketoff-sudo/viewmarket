"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const supportEmail = "support@viewmarket.in";

const ContactUsLinks = () => {
  const [showToast, setShowToast] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(supportEmail);
      setShowToast(true);
      return;
    } catch {
      // Fallback for older browsers.
    }

    const textArea = document.createElement("textarea");
    textArea.value = supportEmail;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setShowToast(true);
  }, []);

  useEffect(() => {
    if (!showToast) {
      return;
    }

    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = window.setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [showToast]);

  return (
    <div className="space-y-4 text-sm">
      <span className="block font-medium">Contact us</span>
      <button
        type="button"
        onClick={handleCopyEmail}
        className="block text-left text-muted-foreground duration-150 hover:text-primary"
      >
        Email us
      </button>
      <a
        href={`mailto:${supportEmail}?subject=Support%20Ticket`}
        className="block text-muted-foreground duration-150 hover:text-primary"
      >
        Raise a ticket
      </a>
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg border border-border/60 bg-card px-4 py-3 text-xs text-foreground shadow-lg">
          Email has been copied: {supportEmail}
        </div>
      )}
    </div>
  );
};

export default ContactUsLinks;
