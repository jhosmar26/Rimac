import './Home.scss';
import heroMobile from './../assets/images/hero-mobile.svg';

export const Home = () => {
  return (
    <div className="home grid-38-cols">
      <div className="text">
        <span className="top">¡Nuevo!</span>
        <h1 className="title">Seguro <span>Vehicular</span> <span className="red">Tracking</span></h1>
        <div className="bottom">Cuentanos donde le harás seguimiento a tu seguro</div>
      </div>
      <div className="hero__right">
        <img src={heroMobile} alt="" />
      </div>
    </div>
  )
}

export default Home;