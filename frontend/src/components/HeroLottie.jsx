import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function HeroLottie() {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/strategy-advisory.json",
    });

    return () => anim.destroy();
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
