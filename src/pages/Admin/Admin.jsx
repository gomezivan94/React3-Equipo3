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
    Trailer: ''
  });

  const [juegoEditando, setJuegoEditando] = useState({
    Title: '',
    Description: '',
    Precio: '',
    Type: '',
    Header: '',
    Trailer: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 5;

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = juegos.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNuevoJuegoChange = (e) => {
    setNuevoJuego({
      ...nuevoJuego,
      [e.target.name]: e.target.value,
    });
  };

  const handleJuegoEditandoChange = (e) => {
    setJuegoEditando({
      ...juegoEditando,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgregarJuego = () => {
    if (!nuevoJuego.Title || !nuevoJuego.Description || !nuevoJuego.Precio || !nuevoJuego.Type || !nuevoJuego.Header || !nuevoJuego.Trailer) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (nuevoJuego.Title.length > 25) {
      alert('El título no puede tener más de 25 caracteres.');
      return;
    }

    const idNuevoJuego = juegos.length ? juegos[juegos.length - 1].id + 1 : 1; 
    const juegoParaAgregar = { id: idNuevoJuego, ...nuevoJuego };
    agregarJuego(juegoParaAgregar);
    setNuevoJuego({ Title: '', Description: '', Precio: '', Type: '', Header: '', Trailer: '' });
  };

  const handleEdit = (juego) => {
    setIsEditing(true);
    setEditingId(juego.id);
    setJuegoEditando({
      Title: juego.Title,
      Description: juego.Description,
      Precio: juego.Precio,
      Type: juego.Type,
      Header: juego.Header,
      Trailer: juego.Trailer
    });
  };

  const handleConfirmEdit = () => {
    if (!juegoEditando.Title || !juegoEditando.Description || !juegoEditando.Precio || !juegoEditando.Type || !juegoEditando.Header || !juegoEditando.Trailer) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (juegoEditando.Title.length > 25) {
      alert('El título no puede tener más de 25 caracteres.');
      return;
    }

    editarJuego(editingId, juegoEditando); 
    setIsEditing(false);
    setJuegoEditando({ Title: '', Description: '', Precio: '', Type: '', Header: '', Trailer: '' }); 
  };

  const handleDelete = (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este juego?');
    if (confirmacion) {
      eliminarJuego(id);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(juegos.length / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container text-white text-center">
        <h2>Administrar Juegos</h2>

        <button 
          className="btn btn-success mb-3" 
          data-bs-toggle="modal" 
          data-bs-target="#addModal"
          onClick={() => setNuevoJuego({ Title: '', Description: '', Precio: '', Type: '', Header: '', Trailer: '' })}
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
                    <input type="number" min={0} className="form-control" id="Precio" name="Precio" value={nuevoJuego.Precio} onChange={handleNuevoJuegoChange} />
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
                  <button type="button" className="btn btn-primary" onClick={handleAgregarJuego} data-bs-dismiss="modal">
                    Agregar Juego
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        
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
                    <input type="text" className="form-control" id="Title" name="Title" value={juegoEditando.Title} onChange={handleJuegoEditandoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Descripción</label>
                    <textarea className="form-control" id="Description" name="Description" value={juegoEditando.Description} onChange={handleJuegoEditandoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Precio" className="form-label">Precio</label>
                    <input type="number" min={0} className="form-control" id="Precio" name="Precio" value={juegoEditando.Precio} onChange={handleJuegoEditandoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Type" className="form-label">Categoría</label>
                    <input type="text" className="form-control" id="Type" name="Type" value={juegoEditando.Type} onChange={handleJuegoEditandoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Header" className="form-label">URL de la Portada</label>
                    <input type="text" className="form-control" id="Header" name="Header" value={juegoEditando.Header} onChange={handleJuegoEditandoChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Trailer" className="form-label">URL del Tráiler</label>
                    <input type="text" className="form-control" id="Trailer" name="Trailer" value={juegoEditando.Trailer} onChange={handleJuegoEditandoChange} />
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
