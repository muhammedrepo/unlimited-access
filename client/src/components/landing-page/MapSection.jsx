import styled from "styled-components";
import {
  aus,
  brazil,
  can,
  india,
  jap,
  sing,
  sout,
  uk,
  usa,
} from "../../images";
import map from "../../images/map.png";
import MapCounter from "./MapCounter";

const Wrapper = styled.div`
  .map-title {
    position: absolute;
    min-width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -70px;
  }
  li {
    display: flex;
    gap: 1rem;

    span {
      font-size: 14px;
      color: gray;
    }
  }
`;

const MapSection = () => {
  return (
    <Wrapper>
      <figure className="relative">
        <img src={map} alt="map" className="w-full h-auto opacity-60" />

        <figcaption className="map-title px-4 max-w-3xl">
          <h3 className="capitalize text-center text-base lg:text-2xl">
            Our Members are from Around The World. Some of our Most Popular
            Countries.
          </h3>
          <div className="flex justify-center">
            <ul className="pr-12">
              <li>
                <img src={usa} alt="usa" />
                <span>USA</span>
              </li>
              <li>
                <img src={uk} alt="uk" />
                <span>United Kingdom</span>
              </li>
              <li>
                <img src={can} alt="canada" />
                <span>Canada</span>
              </li>
              <li>
                <img src={aus} alt="Australia" />
                <span>Australia</span>
              </li>
              <li>
                <img src={india} alt="india" />
                <span>India</span>
              </li>
            </ul>
            <ul className="pl-12">
              <li>
                <img src={sing} alt="singapore" />
                <span>Singapore</span>
              </li>
              <li>
                <img src={jap} alt="japan" />
                <span>Japan</span>
              </li>
              <li>
                <img src={sout} alt="south africa" />
                <span>South Africa</span>
              </li>
              <li>
                <img src={brazil} alt="brazil" />
                <span>Brazil</span>
              </li>
              <li>
                <span>and many more...</span>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
      <MapCounter />
    </Wrapper>
  );
};

export default MapSection;
