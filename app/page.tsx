import Hero from "@/components/Hero"
import About from "@/components/About"
import Rules from "@/components/Rules"
import Team from "@/components/Team"
import SideNav from "@/components/SideNav"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <SideNav />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="rules">
        <Rules />
      </section>
      <section id="team">
        <Team />
      </section>
    </main>
  )
}

