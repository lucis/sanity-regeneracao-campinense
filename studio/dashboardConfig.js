export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df4153cac7317e9d8e097a1',
                  title: 'Sanity Studio',
                  name: 'sanity-regeneracao-campinense-studio',
                  apiId: 'c0705f24-7bfe-403c-8cab-5a31c94491e2'
                },
                {
                  buildHookId: '5df4153ca202187d20084c25',
                  title: 'Portfolio Website',
                  name: 'sanity-regeneracao-campinense',
                  apiId: '932a37a4-9ac7-4f4e-9f91-f342a3fbc42e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luciannojunior/sanity-regeneracao-campinense',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-regeneracao-campinense.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
