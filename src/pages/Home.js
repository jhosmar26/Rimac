import './Home.scss';
import girlMobile from './../assets/images/girl-mobile.png';
import carMobile from './../assets/images/car-mobile.png';
import starsMobile from './../assets/images/stars-mobile.png';

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div class="background-gray"></div>
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
      {/* <div className="form">
        Déjanos tus datos
        <form>
          <label>
            <input type="text" name="phone" />
          </label>
          <label>
            <input type="text" name="phone" />
          </label>
          <input type="submit" value="Cotízalo" />
        </form>

      </div> */}
    </div>
  )
}

export default Home;