export default function FormAnime({ handleChange, addAnime, anime,categorias }) {
    return (
        <form className="form_anime" onSubmit={addAnime}>
            <div className="name_anime mb-2">
                <input type="text" className="form-control" name="nombre" value={anime.nombre} placeholder="Nombre del Anime" onChange={handleChange} />
            </div>
            <div className="categoria_anime mb-2">
                <select name="categoria" value={anime.categoria} className="form-select" onChange={handleChange}>
                    <option value="">Categoria de anime</option>
                    {categorias.map(categoria => (
                        <option value={categoria.nombre_cat} key={categoria.id}>{categoria.nombre_cat}</option>
                    ))}

                </select>
            </div>
            <div className="check mb-2">
                <input type="checkbox" className="form-check-input" checked={anime.visto} name="visto" id="visto" onChange={handleChange} />
                <label htmlFor="visto" className="form-check-label"> ¿Viste el anime?</label>
            </div>

            <button className="btn btn-success" type="submit">Añadir anime</button>
        </form>
    )
}