
import PropTypes from 'prop-types';
import CardWidget from '../CardWidget/CardWidget';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <section className="list-container">
      {/* Catálogo de productos */}
      <h2 className="text-3xl font-bold mb-4">Productos</h2>
      <hr className="mb-4" />

      {/* Botones de categoría */}
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pulseras
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Anillos
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Cadenas
        </button>
      </div>
      
      <CardWidget />

      <div>
        <h1>{props.greeting}</h1>
      </div>
    </section>

    
  );

  
}

ItemListContainer.PropTypes = {

    greeting: PropTypes.string.isRequired
    
    }



export default ItemListContainer;