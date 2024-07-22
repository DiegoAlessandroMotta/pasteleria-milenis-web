import "@/ui/components/search-bar.css"

export const SearchBar = () => {
  return (
    <form className="search-bar" onSubmit={(e) => { e.preventDefault() }}>
      <input className="search-bar__input" type="text" placeholder="Escriba para buscar" />
      <button className="search-bar__button button">
        Buscar
      </button>
    </form>
  )
}
