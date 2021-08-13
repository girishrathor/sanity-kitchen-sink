export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '61164ec7f68dfb00a85f0ac8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-aoey6zad',
                  apiId: 'a09c76d8-2a66-469c-baca-b089a4bccb01'
                },
                {
                  buildHookId: '61164ec718d43a00d9ad4811',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w8bkv64z',
                  apiId: '75031946-7adf-4326-9e36-2a5df525c031'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/girishrathor/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w8bkv64z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
