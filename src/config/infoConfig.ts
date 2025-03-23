export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Yaqi yang'
export const headline = 'Student at Dalian University of Technology.'
export const introduction =
  "The Wild Grad Student's Survival Guide."
export const email = 'yaqi0yang@gmail.com'
export const githubUsername = 'YiChen00'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Derek Hu. I'm from Hubei and an alumnus of BUPT, UChicago, and Tsinghua. I’ve been teaching Computer Science at SCLS since 2020.",
  'Currently I am working on a new course called AI Camp, an innovative course where high school students create real-world products and startups while exploring the frontiers of AI.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "A chaotic mix of content and ideas."
// export const blogIntro =
//   "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://v.douyin.com/i5ctG9Fe',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/1654926758',
  },
]

// https://simpleicons.org/
// 不想使用这个旋转效果
// export const techIcons = [
//   'typescript',
//   'javascript',
//   'supabase',
//   'cloudflare',
//   'java',
//   'oracle',
//   'mysql',
//   'react',
//   'nodedotjs',
//   'nextdotjs',
//   'prisma',
//   'postgresql',
//   'nginx',
//   'vercel',
//   'docker',
//   'git',
//   'github',
//   'visualstudiocode',
//   'androidstudio',
//   'ios',
//   'apple',
//   'wechat',
// ]
