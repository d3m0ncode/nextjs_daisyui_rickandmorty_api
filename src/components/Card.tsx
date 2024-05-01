import React from "react";
import Image from "next/image";
import { Result } from "@/interfaces/CharactersInterface";
const Card = ({ name, image, species, status, id, location, type }: Result) => {
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl"
      style={{
        width: "200px",
        height: "350px",
        borderRadius: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.5s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotateY(18deg)";
        e.currentTarget.style.transform = "rotateX(18deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "rotateY(0deg)";
      }}
    >
      <figure>
        <Image
          src={image}
          width={400}
          height={400}
          layout="responsive"
          alt="img api"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{name.slice(0, 8)}</div>
        </h2>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{species.slice(0, 8)}</div>
          <div className="badge badge-outline">{type.slice(0, 8)}</div>
          <div className="badge badge-outline">{location.name.slice(0, 8)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
