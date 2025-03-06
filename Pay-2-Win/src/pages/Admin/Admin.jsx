// src/pages/Admin/Admin.jsx
import { useContext, useState } from 'react';
import { JuegosContext } from '../../context/JuegosContext'; 
import Footer from '../../components/Footer/Footer';
import CustomNavbar from '../../components/Navbar/Navbar';

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

  // Maneja el cambio en los campos del formulario
  const handleNuevoJuegoChange = (e) => {
    setNuevoJuego({
      ...nuevoJuego,
      [e.target.name]: e.target.value,
    });
  };

  // Agregar nuevo juego
  const handleAgregarJuego = () => {
    const idNuevoJuego = juegos.length ? juegos[juegos.length - 1].id + 1 : 1; // Asigna un ID único
    const juegoParaAgregar = { id: idNuevoJuego, ...nuevoJuego };
    agregarJuego(juegoParaAgregar);
    setNuevoJuego({ Title: '', Description: '', Precio: '', Type: '', Header: '', Trailer: '', Destacado: '' }); // Resetear formulario
  };

  // Editar juego
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

  // Confirmar edición del juego
  const handleConfirmEdit = () => {
    const juegoEditado = { id: editingId, ...nuevoJuego };
    editarJuego(juegoEditado); 
    setIsEditing(false);
    setNuevoJuego({ Title: '', Description: '', Precio: '', Type: '', Header: '', Trailer: '', Destacado: '' }); 
  };

  // Eliminar juego
  const handleDelete = (id) => {
    eliminarJuego(id); // 
  };

  return (
    <>
    <div className="container text-white text-center">
      <h2>Administrar Juegos</h2>

      <div>
        {juegos.map((juego) => (
          <div key={juego.id} className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title">{juego.Title}</h5>
              </div>
              <div>
              <button onClick={() => handleEdit(juego)} className="btn btn-warning">Editar</button>
              <button onClick={() => handleDelete(juego.id)} className="btn btn-danger ms-2">Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3>{isEditing ? 'Editar Juego' : 'Agregar Nuevo Juego'}</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="Title" className="form-label">Título</label>
            <input
              type="text"
              className="form-control"
              id="Title"
              name="Title"
              value={nuevoJuego.Title}
              onChange={handleNuevoJuegoChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Descripción</label>
            <textarea
              className="form-control"
              id="Description"
              name="Description"
              value={nuevoJuego.Description}
              onChange={handleNuevoJuegoChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Precio" className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              id="Precio"
              name="Precio"
              value={nuevoJuego.Precio}
              onChange={handleNuevoJuegoChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Type" className="form-label">Categoría</label>
            <input
              type="text"
              className="form-control"
              id="Type"
              name="Type"
              value={nuevoJuego.Type}
              onChange={handleNuevoJuegoChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Header" className="form-label">URL de la Portada</label>
            <input
              type="text"
              className="form-control"
              id="Header"
              name="Header"
              value={nuevoJuego.Header}
              onChange={handleNuevoJuegoChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Trailer" className="form-label">URL del Tráiler</label>
            <input
              type="text"
              className="form-control"
              id="Trailer"
              name="Trailer"
              value={nuevoJuego.Trailer}
              onChange={handleNuevoJuegoChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Destacado" className="form-label">Juego Destacado</label>
            <input
              className='m-2'
              type="checkbox"
              id="Destacado"
              name="Destacado"
              value="true"
              onChange={handleNuevoJuegoChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={isEditing ? handleConfirmEdit : handleAgregarJuego}
          >
            {isEditing ? 'Confirmar Edición' : 'Agregar Juego'}
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Admin;
