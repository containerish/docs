module.exports = {
  //base: 'https://blog.openregistry.dev'
  lang: 'en-US',
  title: "Open Registry Blog",
  description: "A decentralised container registry fully compliant with OCI Distribution Specification",

  themeConfig: {
    darkMode: true,
    repo: 'https://github.com/containerish',
    editLink: false,
    logo: 'https://avatars.githubusercontent.com/u/90045228?v=4&s=200',
    contributors: true,
    sidebar: [
      {
        text: 'Home',
        link: '/README.md',
        children: [
            '/guide/documentation.md',
            '/guide/gettingStarted.md',
            '/guide/collaborations.md',
            '/guide/changelog.md',
            '/guide/contact.md',
        ]
      }
    ]
  },
}
