const Hero = () => {
  return (
    <section className="bg-light py-5 wallpaper">
      <div className="container container-fluid">
        <div className="row align-items-center">
          {/* Texto */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">Descubrí el sonido perfecto</h1>
            <p className="lead">
              Instrumentos, tecnología y asesoramiento para tu camino musical.
            </p>
            <button className="btn-animado">Ver productos</button>
          </div>

          {/* Imagen */}
          <div className="col-md-6 text-center mt-4 mt-md-0"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
