import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Avez-vous aimez Aigle d'or Madagascar?</h2>
              <p>Inscrire et profitez-les </p>
              <form className="form-section">
                <input placeholder="Votre E-mail..." name="email" type="email" />
                <input value="Envoyer" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
