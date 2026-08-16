import React from "react";
import { UserContext } from "../../contexts/UserContext";
import Hero from "./components/Hero/Hero";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <Hero data={data} />
    </>
  );
};

export default User;
