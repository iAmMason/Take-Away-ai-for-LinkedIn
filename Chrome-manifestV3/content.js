// Function to hide unwanted elements
function hideUnwantedElements() {
  // Hide buttons
  const buttons = document.querySelectorAll('.display-flex.align-items-center button[aria-label="Scroll left"], .display-flex.align-items-center button[aria-label="Scroll right"]');
  buttons.forEach(button => {
    button.style.display = 'none';
  });

  // Hide ul elements
  const ulElements = document.querySelectorAll('.display-flex.align-items-center ul[class^="u"]');
  ulElements.forEach(ulElement => {
    ulElement.style.display = 'none';
  });
}

// Initial run when the content script is loaded
hideUnwantedElements();

// MutationObserver to watch for new elements being added to the DOM
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      hideUnwantedElements();
    }
  });
});

// Observe the whole document
observer.observe(document.body, {
  childList: true,
  subtree: true
});