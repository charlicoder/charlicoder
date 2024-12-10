import Typewriter from "typewriter-effect";

function Logo() {
    return (
        <div style={{ fontFamily: "Dancing Script", fontSize: "24px" }}>


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
        </div>
    );
}

export default Logo;