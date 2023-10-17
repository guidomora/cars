import Portada from "@/layoutComponents/header/Portada"
import "./page.module.css"
import MainBody from "@/components/body/MainBody"

export default function Home() {
  return (
    <main >
      <Portada />
      <MainBody />
    </main>
  )
}
