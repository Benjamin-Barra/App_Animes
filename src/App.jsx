import { useState, useEffect } from "react"
import FormAnime from "./components/FormAnime";
import ListaAnimes from "./components/ListaAnimes";

export default function App() {

  // Esta funcion borra el local Storage
  //localStorage.clear()

  const [anime, setAnime] = useState({
    nombre: "",
    categoria: "",
    visto: false
  });

  const categorias = [
    {
      id: 1,
      nombre_cat: "Shonen"
    },
    {
      id: 2,
      nombre_cat: "Shojo"
    },
    {
      id: 3,
      nombre_cat: "Isekai"
    },
    {
      id: 4,
      nombre_cat: "Seinen"
    },
    {
      id: 5,
      nombre_cat: "Mecha"
    },
    {
      id: 6,
      nombre_cat: "Kodomo"
    },
    {
      id: 7,
      nombre_cat: "Rom-Com"
    }
  ] 

  const [animes, setAnimes] = useState(() => {
    const guardados = localStorage.getItem("listaAnimes");
    return guardados ? JSON.parse(guardados) : []
  });

  useEffect(() => {
    const animesStorage = JSON.stringify(animes);

    localStorage.setItem("listaAnimes", animesStorage)
  }, [animes])

  const addAnime = (e) => {
    e.preventDefault()
    if (anime.nombre.trim() === "" || anime.categoria.trim() === "") {
      return alert("Completa los campos")
    } else {
      const animeAdd = {
        ...anime,
        id: Date.now()
      }
      
      setAnimes([...animes, animeAdd])

      setAnime({
        nombre: "",
        categoria: "",
        visto: false
      })
    }
    
    
  }

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setAnime({
      ...anime,
      [name]: type === "checkbox" ? checked : value
    });

  }

  const eliminarAnime = (idAnime) => {
    const animesLista = animes.filter(anime => anime.id !== idAnime)

    setAnimes(animesLista)
  }

  const updateAnime = (idAnime) => {
    setAnimes(animes.map(anime => 
      anime.id === idAnime 
      ? {...anime, visto: !anime.visto}
      : anime
    ))
  }

  return (
    <>
      <h1 className="text-center">Animes Vistos</h1>
      <div className="main_container container p-4">
        <div className="container_form">
          <FormAnime handleChange={handleChange} addAnime={addAnime} anime={anime} categorias={categorias} />
        </div>
        <div className="container_lista_animes mt-2">
          <h3 className="text-center">Lista de Animes</h3>
          <div className="animes">
            <ListaAnimes animes={animes} eliminarAnime={eliminarAnime} updateAnime={updateAnime} />
          </div>
        </div>

      </div>
    </>
  )
}