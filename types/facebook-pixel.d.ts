interface Window {
  fbq: (
    action: 'track' | 'init',
    eventName: string,
    params?: Record<string, any>
  ) => void;
}
