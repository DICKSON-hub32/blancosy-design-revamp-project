import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="grain relative flex min-h-screen items-center overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-petrol/70 blur-[120px]"
      />
      <div className="wrap">
        <h1 className="display text-[clamp(8rem,32vw,24rem)] leading-[0.8] text-leaf">
          404
        </h1>
        <p className="statement mt-8">Oops! Page not found</p>
        <a href="/" className="btn btn-ember mt-10">
          Return to Home <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
