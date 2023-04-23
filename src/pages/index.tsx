import LandingFragment from '@/components/LandingFragment'
import GameFragment from '@/components/GameFragment'
// import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <div>
      <LandingFragment />
      <GameFragment />
      {/* <ProjectCard
        imageUrl="/polycloud.webp"
        imageAlt="polycloud"
        title="Polycloud"
        description="React web app used to manage a conference, invite attendees and generate/scan tickets."
        githubLink="https://github.com"
      /> */}
    </div>
  )
}
