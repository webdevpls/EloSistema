/** @type {import('next').NextConfig} */
const nextConfig = {

    async headers() {
        return [
          {
            source: '/api/pessoas/:path*', // Permite todas as sub-rotas de /api/pessoas
            headers: [
              { key: 'Access-Control-Allow-Origin', value: '*' },
              { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
              { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
            ],
          },
        ];
      },
    

};



export default nextConfig;
