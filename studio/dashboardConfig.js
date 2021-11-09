export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '618a6d8303d184449ee67ce5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-atkbhrqs',
                  apiId: '5a8317bf-018c-4d82-ba0a-46afd1f77230'
                },
                {
                  buildHookId: '618a6d83a1540e3df3f913ff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5k1whqop',
                  apiId: 'a164d3aa-e498-4e99-8a68-4bc67d6c057b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hagerp/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5k1whqop.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
