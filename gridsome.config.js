// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },{
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100 查询限制  默认1000条
        // contentTypes: ['Post','Tag'], // 查询的类型
        // singleTypes: ['general'], // 单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {   // 受保护
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
}
