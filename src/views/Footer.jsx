import "@/ui/views/footer.css"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="footer px-8 py-4">
      <div className="max-w-1280 mx-auto">
        <div>
          <Link to="/" className="footer__titulo"> Pastelería Mileni's</Link>
          <span
            className="footer__autor"
          >{" - puerto maldonado"}</span>
        </div>
      </div>
    </footer>
  )
}
