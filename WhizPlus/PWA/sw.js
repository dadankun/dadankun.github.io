importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init({
    assetCachingOptions: [{
        regexp: /\.(webp|png|jpg)/,
        cachingStrategy: 'CACHE_FIRST'
    }],
    offlinePageOptions: {
        url: 'https://www.dadankun.my.id/WhizPlus/PWA/offline.html',
        assets: []
    }
});