export default defineAppConfig({
  docus: {
    title: 'DeepFashion AI Docs',
    description: 'Fashion AI Copilot',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'deepfashionhq',
      youtube: 'deepfashionhq',
      instagram:'deepfashionhq'
    },
    aside: {
      level: 0,
      exclude: ["/"]
    },
    header: {
      logo: false
    },
    footer: {
      iconLinks: [
        {
          href: 'https://deepfashion.us',
          icon: ''
        }
      ]
    }
  }
})
