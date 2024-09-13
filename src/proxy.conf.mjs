export default [
    {
        context: [
            '/api',
        ],
        target: 'http://localhost:3000',
        changeOrigin: false,
        secure: false,
        // bypass: function (req, res, proxyOptions) {
        //     if (req.headers.accept.includes('html')) {
        //         console.log('Skipping proxy for browser request.');
        //         return '/index.html';
        //     }
        //     req.headers['X-Custom-Header'] = 'yes';
        // }
    }
];