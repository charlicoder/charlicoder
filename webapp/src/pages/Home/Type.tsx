import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Python Developer",
          "Freelancer",
          "Data Engineer",
          "GenAI & Prompt Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }
      }
    />
  );
}

export default Type;