// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CardHolder.css";
const CardHolder = () => {
  return (
    <div className="cardDiv">
      <div>
        <img
          src="https://codewithsadee.github.io/tourly/assets/images/popular-1.jpg"
          width={"343px"}
          height={"410px"}
          style={{ borderRadius: "20px" }}
        />
        <div className="cardContent">
          <div className="cardTitle">
            <span>ITALY</span>
          </div>
          <div className="cardSubTitle">
            <span>SAN MIGUEL</span>
          </div>
          <div className="cardText">
            <span>
              Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
            </span>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://codewithsadee.github.io/tourly/assets/images/popular-2.jpg"
          width={"343px"}
          height={"410px"}
          style={{ borderRadius: "20px" }}
        />
        <div className="cardContent">
          <div className="cardTitle">
            <span>DUBAI</span>
          </div>
          <div className="cardSubTitle">
            <span>BURJ KHALIFA</span>
          </div>
          <div className="cardText">
            <span>
              Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
            </span>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://codewithsadee.github.io/tourly/assets/images/popular-3.jpg"
          width={"343px"}
          height={"410px"}
          style={{ borderRadius: "20px" }}
        />
        <div className="cardContent">
          <div className="cardTitle">
            <span>JAPAN</span>
          </div>
          <div className="cardSubTitle">
            <span>KYOTO TEMPLE</span>
          </div>
          <div className="cardText">
            <span>
              Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHolder;
