import React from 'react'

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === 'production') {
    const pixel = `!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','${pluginOptions.pixelId}');rdt('track', 'PageVisit');`

    /* eslint-disable */
    return setHeadComponents([
      <script
        key="gatsby-plugin-reddit-pixel"
        dangerouslySetInnerHTML={{
          __html: pixel
        }}
      />
    ])
    /* eslint-enable */
  }
}
