const Team = () => {
  return (
    <section className="team-members section-pt">
      <div className="container">
        <div className="section-title text-center">
          <span className="before after">TEAM MEMBERS</span>
          <h2>Our Top Skilled Experts</h2>
        </div>
        <div className="row mt-5 mx-auto mx-lg-0">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="images/team-member.png" alt="team member" />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="images/team-member.png" alt="team member" />
          </div>
          <div className="col-lg-4">
            <img src="images/team-member.png" alt="team member" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
