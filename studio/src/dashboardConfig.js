export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c2756193c30b51a744e30',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y6smhb1p',
                  apiId: 'e2e54b14-c210-4be5-91c1-8ea8dc85afe2'
                },
                {
                  buildHookId: '5f2c2756b96dd4d2b0f73466',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-he57ix18',
                  apiId: 'c59949d9-123d-40ab-8fde-97c4baab3aa8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alanben/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-he57ix18.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
