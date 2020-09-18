export const onRouteUpdate = function ({ location }) {
  // Don't track while developing.
  if (process.env.NODE_ENV === 'production' && typeof rdt === 'function') {
    rdt('track', 'ViewContent')
  }
}
