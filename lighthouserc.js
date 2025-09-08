module.exports = {
    ci: {
      collect: {
        // staticDistDir: './public',
        /* Add configuration here */
        url: ['http://localhost:3000']
      },
      upload: {
        target: 'temporary-public-storage',
        /* Add configuration here */
      },
    },
  };