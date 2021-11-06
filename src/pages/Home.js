import './Home.scss';
import girlMobile from './../assets/images/girl-mobile.png';
import carMobile from './../assets/images/car-mobile.png';
import starsMobile from './../assets/images/stars-mobile.png';

export const Home = () => {
  return (
    <div className="home">
      <div className="background-gray"></div>
      <div className="hero">
        <div className="text">
          <span className="text__top">¡Nuevo!</span>
          <h1 className="text__title"> Seguro
            <span className="red middle-custom"> Vehicular </span>
            <span className="red"> Tracking </span>
          </h1>
          <div className="text__bottom">Cuentanos donde le harás seguimiento a tu seguro</div>
        </div>
        <div className="hero__right">
          <img className="car" src={carMobile} alt="" />
          <img className="girl" src={girlMobile} alt="" />
          <img className="stars" src={starsMobile} alt="" />
        </div>
      </div>
      <form className="form">
        <div className="title">
          Déjanos tus datos
        </div>
        <div className="personal-data">
          <label>
            <input className="input" type="number" name="doc" placeholder="Nro. de doc"/>
          </label>
          <label>
            <input className="input" type="number" name="phone" placeholder="Celular"/>
          </label>
          <label>
            <input className="input" type="text" name="Cotízalo" placeholder="Placa"/>
          </label>
        </div>
        <div className="termns">
          <input type="checkbox" className="termns__checkbox"/>
          <div className="text">
            Acepto la <a href="" className="link">Política de Protección de Datos Personales</a> y los <a className="link" href="">Términos y Condiciones.</a>
          </div>
        </div>
        <div>
          <input className="button-primary" type="submit" value="Cotízalo"/>
        </div>
      </form>
    </div>
  )
}

export default Home;