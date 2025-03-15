import { useContext, useState } from 'react';
import { JuegosContext } from '../../context/JuegosContext'; 
import Footer from '../../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  const { juegos, agregarJuego, editarJuego, eliminarJuego } = useContext(JuegosContext);
  const [nuevoJuego, setNuevoJuego] = useState({
    Title: '',
    Description: '',
    Precio: '',
    Type: '',
    Header: '', 
    Trailer: '', 
    Destacado: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 5; // Puedes cambiar el número de juegos por página según lo necesites.

  // Calcular los juegos a mostrar en la página actual
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = juegos.slice(indexOfFirstGame, indexOfLastGame);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNuevoJuegoChange = (e) => {
    setNuevoJuego({
      ...nuevoJuego,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgregarJuego = () => {
    const idNuevoJuego = juegos.length ? juegos[juegos.length - 1].id + 1 : 1; 
    const juegoParaAgregar = { id: idNuevoJuego, ...nuevoJuego };
    agregarJuego(juegoParaAgregar);
    setNuevoJuego({ Title: '', Description: '', Precio: '', Type: '', Header: '', Trailer: '', Destacado: '' });
  };

  const handleEdit = (juego) => {
    setIsEditing(true);
    setEditingId(juego.id);
    setNuevoJuego({
      Title: juego.Title,
      Description: juego.Description,
      Precio: juego.Precio,
      Type: juego.Type,
      Header: juego.Header,
      Trailer: juego.Trailer,
      Destacado: juego.Destacado
    });
  };

  const handleConfirmEdit = () => {
    editarJuego(editingId, nuevoJuego); 
    setIsEditing(false);
    setNuevoJuego({ Title: '', Description: '', Precio: '', Type: '', Header: '', Trailer: '', Destacado: '' }); 
  };

  const handleDelete = (id) => {
    // Mostrar ventana de confirmación antes de eliminar
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este juego?');
    if (confirmacion) {
      eliminarJuego(id);
    } else {
      console.log('Eliminación cancelada');
    }
  };

  // Páginas
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(juegos.length / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container text-white text-center">
        <h2>Administrar Juegos</h2>

        {/* Botón Agregar Juego */}
        <button 
          className="btn btn-success mb-3" 
          data-bs-toggle="modal" 
          data-bs-target="#addModal"
        >
          Agregar Juego
        </button>

        <div>
          {currentGames.map((juego) => (
            <div key={juego.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title">{juego.Title}</h5>
                </div>
                <div>
                  <button onClick={() => handleEdit(juego)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>
                  <button onClick={() => handleDelete(juego.id)} className="btn btn-danger ms-2">Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de Paginación */}
        <nav>
          <ul className="pagination d-flex justify-content-center">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button onClick={() => paginate(number)} className="page-link">
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Modal de Agregar Juego */}
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addModalLabel">Agregar Nuevo Juego</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Título</label>
                    <input type="text" className="form-control" id="Title" name="Title" value={nuevoJuego.Title} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Descripción</label>
                    <textarea className="form-control" id="Description" name="Description" value={nuevoJuego.Description} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Precio" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="Precio" name="Precio" value={nuevoJuego.Precio} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Type" className="form-label">Categoría</label>
                    <input type="text" className="form-control" id="Type" name="Type" value={nuevoJuego.Type} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Header" className="form-label">URL de la Portada</label>
                    <input type="text" className="form-control" id="Header" name="Header" value={nuevoJuego.Header} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Trailer" className="form-label">URL del Tráiler</label>
                    <input type="text" className="form-control" id="Trailer" name="Trailer" value={nuevoJuego.Trailer} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Destacado" className="form-label">Juego Destacado</label>
                    <input className="m-2" type="checkbox" id="Destacado" name="Destacado" checked={nuevoJuego.Destacado === "true"} onChange={handleNuevoJuegoChange} />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={handleAgregarJuego} data-bs-dismiss="modal">
                    Agregar Juego
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL DE EDICIÓN */}
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Editar Juego</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsEditing(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Título</label>
                    <input type="text" className="form-control" id="Title" name="Title" value={nuevoJuego.Title} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Descripción</label>
                    <textarea className="form-control" id="Description" name="Description" value={nuevoJuego.Description} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Precio" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="Precio" name="Precio" value={nuevoJuego.Precio} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Type" className="form-label">Categoría</label>
                    <input type="text" className="form-control" id="Type" name="Type" value={nuevoJuego.Type} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Header" className="form-label">URL de la Portada</label>
                    <input type="text" className="form-control" id="Header" name="Header" value={nuevoJuego.Header} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Trailer" className="form-label">URL del Tráiler</label>
                    <input type="text" className="form-control" id="Trailer" name="Trailer" value={nuevoJuego.Trailer} onChange={handleNuevoJuegoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Destacado" className="form-label">Juego Destacado</label>
                    <input className="m-2" type="checkbox" id="Destacado" name="Destacado" checked={nuevoJuego.Destacado === "true"} onChange={handleNuevoJuegoChange} />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={handleConfirmEdit} data-bs-dismiss="modal">
                    Confirmar Edición
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Admin;
