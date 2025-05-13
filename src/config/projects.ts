// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  iconPath?: string
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Outstanding Teacher Award',
    description: '',
    date: '2024',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'Zhui Ying Award',
    description: '',
    date: '2023',
    location: 'Qingpu, Shanghai',
  },
]

// Research & Projects
export const projectHeadLine = "Projects I've done"
export const projectIntro = "Academic research and technology projects I led or participated."

export const projects: Array<ProjectItemType> = [
  {
    name: '连续式化学镀镍生产线建模',
    description: '2024.7',
    link: { href: '', label: 'View Project' },
    tags: ['Project', 'SolidWorks'],
    iconPath: '/images/icon/SolidWorks.png'
  },
  {
    name: '探测望远镜支撑结构拓扑优化',
    description: '2024.11',
    link: { href: '', label: 'View Project' },
    tags: ['Project', 'HyperMesh', 'OptiStruct'],
    iconPath: '/images/icon/HyperWorks.png'
  },
  {
    name: '3D打印',
    description: '2025.5',
    link: { href: 'https://www.thingiverse.com/thing:7035982', label: 'View Project' },
    tags: ['Project', 'Solidworks', 'BambuStudio'],
    iconPath: '/images/icon/3D_Printing.png'
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
