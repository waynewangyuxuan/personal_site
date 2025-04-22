export type ContentItem = {
  title: string
  description: string
  date: string
  type: "Article" | "Video" | "Podcast" | "Tutorial" | "Poem"
  link: string
  image: string
}

export const contentItems: ContentItem[] = [
  {
    title: "散人行舟 Wander by Boat",
    description: "一点点迷茫 A piece of my confusion",
    date: "Feb 10, 2025",
    type: "Poem",
    link: "https://mp.weixin.qq.com/s/QHLiZPK1ISYSaeBDpTSjow",
    image: "/wander.png?height=400&width=600",
  },

  {
    title: "ContextWIN",
    description: "Whittle Index Based Mixture-of-Experts Neural Model For Restless Bandits Via Deep RL",
    date: "Oct 13, 2024",
    type: "Article",
    link: "https://arxiv.org/abs/2410.09781",
    image: "/contextWIN.png?height=400&width=600"
  },
]
