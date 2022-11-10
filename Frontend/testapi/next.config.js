
module.exports = {
  async rewrites() {
    return [
      {
        source: '/register',
        destination: 'http://localhost:5000/api/users' // Proxy to Backend
      },
      {
        source: '/login',
        destination: 'http://localhost:5000/api/users/login' // Proxy to Backend
      },
      {
        source: '/proxy/:path*',
        destination: 'http://localhost:5000/:path*' // Proxy to Backend
      }
      ,
      {
        source: '/ar',
        destination: 'http://localhost:5000/api/requests' // Proxy to Backend
      }
    ]
  }
  
}
