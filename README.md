# gatsby-plugin-reddit-pixel

A Gatsby plugin to add the reddit pixel onto a site. At this time, 'ViewContent' event is triggered via onRouteUpdate.

## Install

`npm install --save gatsby-plugin-reddit-pixel`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-reddit-pixel`,
    options: {
      pixelId: 'pixel id here',
    },
  },
];
```
