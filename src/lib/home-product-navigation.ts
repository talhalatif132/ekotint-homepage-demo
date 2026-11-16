// One client-navigation intent; never persisted or added to shareable URLs.
let pendingProductId: string | null = null;

function clearProductNavigation() {
  pendingProductId = null;
  window.removeEventListener("popstate", clearProductNavigation);
}

export function prepareProductPreviewNavigation(productId: string) {
  clearProductNavigation();
  pendingProductId = productId;
  // Back/Forward should retain the browser's own scroll restoration.
  window.addEventListener("popstate", clearProductNavigation, { once: true });
}

export function consumeProductPreviewNavigation(productId: string) {
  const matches = pendingProductId === productId;
  clearProductNavigation();
  return matches;
}
