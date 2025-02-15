import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

function RQSuperHeroPage() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(data, heroId);

  return (
    <div className="super-hero-details">
      <img
        className="super-hero-image"
        src={data?.data.image}
        alt={data?.data.name}
      />

      <div className="super-hero-info">
        <div className="super-hero-info-name">
          <h3>{data?.data.name}</h3>
        </div>

        <div className="super-hero-container">
          <div className="super-hero-box">
            <label>Alter Ego:</label>
            <p>{data?.data.alterEgo}</p>
          </div>
          <div className="super-hero-box">
            <label>Location:</label>
            <p>{data?.data.location}</p>
          </div>
          <div className="super-hero-box">
            <label>RealName:</label>
            <p>{data?.data.realName}</p>
          </div>
          <div className="super-hero-box">
            <label>Gender:</label>
            <p>{data?.data.gender}</p>
          </div>
          <div className="super-hero-box">
            <label>Actor:</label>
            <p>{data?.data.actor}</p>
          </div>
          <div className="super-hero-box">
            <label>Age:</label>
            <p>{data?.data.age}</p>
          </div>
          <div className="super-hero-box">
            <label>Phone:</label>
            <p>{data?.data.phone}</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default RQSuperHeroPage;
