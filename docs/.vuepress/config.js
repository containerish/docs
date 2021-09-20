module.exports = {
  //base: 'https://blog.openregistry.dev'
  base: '/',
  head: [['link', { rel: 'icon', href: 'https://parachute.openregistry.dev/static/media/parachute.4575caeb.png'}]],
  lang: 'en-US',
  title: "Open Registry Blog",
  description: "A decentralised container registry fully compliant with OCI Distribution Specification",

  themeConfig: {
    darkMode: true,
    repo: 'https://github.com/containerish',
    editLink: false,
    logo: 'https://parachute.openregistry.dev/static/media/parachute.4575caeb.png',
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
