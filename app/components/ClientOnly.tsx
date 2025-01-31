// wrapper component- use to wrap around other things to avoid hydration mismatch
// certain sections of the app are loaded on the front end and not server side
"use client";

import React, { useState, useEffect } from "react";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient ? <div>{children}</div> : null}</>;
}
