const ClientsReview = () => {
  return (
    <section className="clients-review section-pt">
      <div className="container">
        <div className="section-title text-center">
          <span className="before after">Clients Review</span>
          <h2>People talk about us</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 mx-auto">
            <img src="images/clients-review/Image 1.png" alt="client image" />
          </div>

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="middle-client">
              <img
                src="images/clients-review/Ellipse 2.png"
                alt="client image"
              />
              <div className="client-info">
                <h3>"Elit penatibus curae aucto"</h3>
                <p>
                  Sem a penatibus varius dui nostra vehicula gravida congue,
                  potenti etiam erat justo faucibUS fusce quis nulla eu,
                  dignissim eget posuere blandit curabitur porta inceptos.
                  Inceptos faucibus fringilla pharetra mi suscipit curabitu
                </p>
                <div className="client-bio">
                  <h4>Selina khan</h4>
                  <h4>Designer at (Montan_Agency)</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 mx-auto d-none d-lg-block client-small-imgs mt-4 mt-lg-0">
            <div className="small-img-1">
              <img
                src="images/clients-review/girls-laptop.png"
                alt="client image"
              />
            </div>

            <div className="small-img-2">
              <img
                src="images/clients-review/girls-look-sky.png"
                alt="client image"
              />
            </div>

            <div className="round-shape"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsReview;
