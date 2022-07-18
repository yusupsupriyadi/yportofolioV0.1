import {
  faBootstrap,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLaravel,
  faLinkedin,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="">
      <div className="context z-50">
        {/* Content */}
        <div className="px-8 flex h-screen">
          <div className="m-auto">
            <div className="p-8 text-center max-w-screen-sm rounded-lg backdrop-blur-sm bg-white/10 shadow-2xl">
              <div className="text-xl md:text-2xl text-white text-center">
                Yusup Supriyadi
              </div>
              <p className="text-white/60">Web Developer</p>
              <div className="mt-4 grid grid-cols-3 place-items-center gap-3">
                <a
                  className="text-white/40"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://instagram.com/yusufsryd", "_blank");
                  }}
                >
                  <FontAwesomeIcon
                    className="text-white/50 text-2xl"
                    icon={faInstagram}
                  />
                </a>
                <a
                  className="text-white/40"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.linkedin.com/in/yusup-supriyadi-8bb37a187/",
                      "_blank"
                    );
                  }}
                >
                  <FontAwesomeIcon
                    className="text-white/50 text-2xl"
                    icon={faLinkedin}
                  />
                </a>
                <a
                  className="text-white/40"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/yusupsupriyadi", "_blank");
                  }}
                >
                  <FontAwesomeIcon
                    className="text-white/50 text-2xl"
                    icon={faGithub}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}
      </div>
      <div className="area">
        <ul className="circles">
          <li>
            <FontAwesomeIcon
              className="text-7xl text-white/40"
              icon={faLaravel}
            />
          </li>
          <li>
            <FontAwesomeIcon className="text-2xl text-white/40" icon={faCode} />
          </li>
          <li>
            <FontAwesomeIcon className="text-6xl text-white/40" icon={faPhp} />
          </li>
          <li>
            <FontAwesomeIcon
              className="text-6xl text-white/40"
              icon={faGitAlt}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className="text-4xl text-white/40"
              icon={faHtml5}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className="text-8xl text-white/30"
              icon={faBootstrap}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className="text-9xl text-white/40"
              icon={faReact}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className="text-2xl text-white/40"
              icon={faFigma}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className="text-3xl text-white/40"
              icon={faDatabase}
            />
          </li>
          <li>
            <FontAwesomeIcon
              className="text-9xl text-white/30 rounded-2xl"
              icon={faJs}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
