
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <div className='col'>
          <Card
            titulo="León"
            imagen="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg"
            descripcion="Mamífero" />
        </div>
        <div className='col'>
          <Card
            titulo="Ardilla"
            imagen="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600"
            descripcion="Mamífero" />
        </div>
        <div className='col'>
          <Card
            titulo="Loro"
            imagen="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
            descripcion="Ave" />
        </div>
        <div className='col'>
          <Card
            titulo="Tigre"
            imagen="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600"
            descripcion="Mamífero" />
        </div>
        <div className='col'>
          <Card
            titulo="Venado"
            imagen="https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&w=600"
            descripcion="Mamífero" />
        </div>
        <div className='col'>
          <Card
            titulo="Tucán"
            imagen="https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            descripcion="Ave" />
        </div>
        <div className='col'>
          <Card
            titulo="Pitón"
            imagen="https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg?auto=compress&cs=tinysrgb&w=600"
            descripcion="Reptil" />
        </div>
        <div className='col'>
          <Card
            titulo="Medusa"
            imagen="https://images.pexels.com/photos/67826/jellyfish-luminous-jellyfish-light-light-phenomenon-67826.jpeg?auto=compress&cs=tinysrgb&w=600"
            descripcion="Celenterio" />
        </div>

      </div>


      <Footer />
    </div>
  );
}

export default App;

