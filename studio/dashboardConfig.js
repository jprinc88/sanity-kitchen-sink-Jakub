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
                  buildHookId: '5f917d5ca6a5b500ebed89a4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-jakub-studio',
                  apiId: '5095a5c9-e0ad-4645-a115-822b9375d7b9'
                },
                {
                  buildHookId: '5f917d5c0f54c00088419caa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-jakub',
                  apiId: '051a77a0-8de7-48d3-9bcb-9d39f5b7445c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jprinc88/sanity-kitchen-sink-Jakub',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-jakub.netlify.app', category: 'apps'}
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
