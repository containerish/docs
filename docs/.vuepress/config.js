module.exports = {
  //base: 'https://docs.openregistry.dev'
  base: '/',
  head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/containerish/docs/main/assets/favicon.png'}]],
  lang: 'en-US',
  title: "Blog",
  description: "A decentralised container registry fully compliant with OCI Distribution Specification",

  themeConfig: {
    darkMode: true,
    repo: 'https://github.com/containerish',
    editLink: false,
    logo: 'https://raw.githubusercontent.com/containerish/docs/main/assets/logo.png',
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
