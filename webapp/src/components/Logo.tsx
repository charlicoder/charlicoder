import Typewriter from "typewriter-effect";

function Logo() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Charli Coder"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
            }
        />
    );
}

export default Logo;