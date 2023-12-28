 // @ts-ignore
  export function typing(node, callback: (typing: boolean) => void) {
    let typingTimer:NodeJS.Timeout;

    node.addEventListener('keydown', handleKeyDown);
    node.addEventListener('keyup', handleKeyUp);

    function handleKeyDown() {
      clearTimeout(typingTimer);
      callback(true);
    }

    function handleKeyUp() {
      typingTimer = setTimeout(() => {
        callback(false);
      }, 300);
    }

     return {
        destroy() {
          node.removeEventListener('keydown', handleKeyDown);
          node.removeEventListener('keyup', handleKeyUp);
          clearTimeout(typingTimer);
        },
        // Update the callback if needed
        update(newCallback: (typing: boolean) => void) {
          callback = newCallback;
        }
      };
  }