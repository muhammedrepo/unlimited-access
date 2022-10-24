import CountUp, { useCountUp } from "react-countup";

export default function Counter({ end }) {
  //   useCountUp({
  //     ref: "counter",
  //     end: 1234567,
  //     enableScrollSpy: true,
  //     scrollSpyDelay: 1000,
  //   });

  return (
    <div className="App">
      <div className="content" />
      <CountUp end={end} enableScrollSpy />
      {/* <br />
      <span id="counter" /> */}
    </div>
  );
}
