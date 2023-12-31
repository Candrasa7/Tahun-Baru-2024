import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Mengunggu Tahun Baru 2024!", "Bye 2023👋"]);

  const particlesInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  return (
    <>
     <Particles init={particlesInitialization} options={{ preset: "fireworks" }} />
      <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <span className="text-white font-bold text-4xl text-center px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursorColor="pink"
            cursor
            deleteSpeed={25}
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage([
            "Selamat Tahun Baru 2024", "Awal yang sempurna untuk meraih impian"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App;
