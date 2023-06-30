// url handler, when you have a framework that changes routes but don't manipulates the native history
(() => {
  if (!window.stopOnUrlChangeEventHandler) {
    let interval;
    let url = window.location.toString();

    const start = () => {
      if (interval) return;
      // console.log('start event handler...');
      interval = setInterval(() => {
        const current = window.location.toString();
        if (current !== url) {
          url = current;
          window.dispatchEvent(new Event('urlchange'));
        }
      }, 1000);
    };
    const stop = () => {
      if (!interval) return;
      // console.log('stop event handler...');
      clearInterval(interval);
      interval = undefined;
    };
    const toggleEventHandler = () => {
      // stop the event handler when the view is not visible
      if (document.visibilityState === 'visible') {
        start();
      } else {
        stop();
      }
    };

    document.addEventListener('visibilitychange', toggleEventHandler);

    window.stopOnUrlChangeEventHandler = () => {
      stop();
      window.removeEventListener('visibilitychange', toggleEventHandler);
      delete window.stopOnUrlChangeEventHandler;
    };

    toggleEventHandler();
  }
})();

