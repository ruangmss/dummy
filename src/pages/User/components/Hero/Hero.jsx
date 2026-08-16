import React from "react";
import Button from "../../../../components/Button/Button";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({ data }) => {
  const initials = [data?.firstName, data?.lastName]
    .filter(Boolean)
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <section className="container">
      <div className="user-hero">
        <div className="user-hero-content">
          <div className="user-hero-avatar">{initials || "U"}</div>

          <div className="user-hero-texts">
            <span>Minha conta</span>
            <h1>
              Olá, {data?.firstName} {data?.lastName}!
            </h1>
            <p>É um prazer ter você por aqui.</p>
          </div>
        </div>

        <div className="user-hero-buttons">
          <Link to="/edicao-perfil" className="button">
            Editar Perfil
          </Link>
          <Button text="Sair" type="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
