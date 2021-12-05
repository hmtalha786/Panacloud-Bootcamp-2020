import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";

const keyFramesOrange = [
  { background: "#FFA500", transform: "translateY(5px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFA500", transform: "translateY(-5px)" },
];

const keyFramesGreen = [
  { background: "#90EE90", transform: "translateY(-6px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#90EE90", transform: "translateY(6px)" },
];

const keyFramesBlue = [
  { background: "#87CEFA", transform: "translateY(8px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#87CEFA", transform: "translateY(-8px)" },
];

const keyFramesPink = [
  { background: "#FFB6C1", transform: "translateY(-6px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFB6C1", transform: "translateY(6px)" },
];

const keyFramesYellow = [
  { background: "#FFFF00", transform: "translateY(5px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(0px)" },
  { background: "white" },
  { background: "#FFFF00", transform: "translateY(-5px)" },
];

const keyProps = {
  duration: 800,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out",
};

const RingFrames = [
  { transform: "rotate(0deg)" },
  { transform: "rotate(360deg)" },
];

const RingProps = {
  duration: 2000,
  iterations: Infinity,
  easing: "ease",
};

function App() {
  const animateOrangeBall = useWebAnimations({
    keyframes: keyFramesOrange,
    timing: keyProps,
  });

  const animateGreenBall = useWebAnimations({
    keyframes: keyFramesGreen,
    timing: keyProps,
  });

  const animateBlueBall = useWebAnimations({
    keyframes: keyFramesBlue,
    timing: keyProps,
  });

  const animatePinkBall = useWebAnimations({
    keyframes: keyFramesPink,
    timing: keyProps,
  });

  const animateYellowBall = useWebAnimations({
    keyframes: keyFramesYellow,
    timing: keyProps,
  });

  const animateRing = useWebAnimations({
    keyframes: RingFrames,
    timing: RingProps,
  });
  
  return (
    <>
      <div className="container">
        <div className="circle" ref={animateRing.ref}/>
        <div className="center orange" ref={animateOrangeBall.ref}/>
        <div className="center green" ref={animateGreenBall.ref}/>
        <div className="center blue" ref={animateBlueBall.ref}/>
        <div className="center pink" ref={animatePinkBall.ref}/>
        <div className="center yellow" ref={animateYellowBall.ref}/>
      </div>
    </>
  );
}

export default App;
