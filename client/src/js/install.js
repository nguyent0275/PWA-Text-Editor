const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // stores the triggered event
  window.deferredPrompt = event;

  // removes the hidden class from the button
  butInstall.classList.toggle("hidden", false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  //   shows the prompt
  promptEvent.prompt();

  //   reset the deferred prompt variable, only usable once
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Add an event handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // clears the promp
  window.deferredPrompt = null;
});
