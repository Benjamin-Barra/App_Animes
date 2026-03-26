export default function ListaAnimes({ animes, eliminarAnime, updateAnime }) {
    return (
        <>
            {animes.map((anime) => (
                <div
                    className="container_anime card container-sm mb-3 p-3"
                    style={{ width: "450px" }}
                    key={anime.id}
                >
                    <div className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="contenido_anime">

                            <div className="textos">
                                <h3 className="card-title">{anime.nombre}</h3>
                                <p>Género: <strong className="card-text">{anime.categoria}</strong></p>
                            </div>
                            <div className="d-grid gap-2">
                                <button
                                    className={`btn ${anime.visto ? "btn-danger" : "btn-success"} d-flex justify-content-center`}
                                    style={{ width: "40px" }}
                                    onClick={() => updateAnime(anime.id)}
                                >{anime.visto ? <ion-icon name="remove-circle-outline" title="No visto"></ion-icon> : <ion-icon title="Visto" name="checkmark-circle-outline"></ion-icon>}</button>
                                <button
                                    className="card-button btn btn-danger"
                                    style={{ width: "160px" }}
                                    onClick={() => eliminarAnime(anime.id)}
                                >
                                    Eliminar Anime
                                </button>
                            </div>
                        </div>
                        <span className="badge text-bg-primary">
                            {anime.visto ? "Visto" : "Pendiente"}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}
