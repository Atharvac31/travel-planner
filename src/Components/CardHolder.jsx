// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CardHolder.css";
const CardHolder = () => {
  return (
    <div className="cardComponent">
      <div>
        <span>Uncover place</span>
      </div>
      <div className="componentTitle">
        <span>POPULAR DESTINATION</span>
      </div>
      <div className="compSubTitle">
        <h3 style={{ width: "70%" }}>
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </h3>
      </div>
      <div className="cardDiv">
        <div className="singlecard">
          <div className="cardWrapper">
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
        </div>
        <div className="singlecard">
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
        <div className="singlecard">
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
    </div>
  );
};

export default CardHolder;
