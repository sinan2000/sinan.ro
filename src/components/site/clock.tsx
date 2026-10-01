'use client';

import { useSyncExternalStore } from 'react';

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

/** Local time at the station; the server renders a fixed-width placeholder so nothing shifts on hydration. */
export function Clock({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(new Date()),
    () => '--:--',
  );
  return <time className="data inline-block w-[5ch] text-ink">{time}</time>;
}
