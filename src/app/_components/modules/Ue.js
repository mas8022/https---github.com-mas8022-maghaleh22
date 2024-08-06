"use client";
import React, { memo, useState, useEffect, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const Loader = () => (
  <div className="size-full bg-black/0">
    <div className="!loading-box !size-full !relative !bg-gray-600 dark:!bg-gray-700"></div>
  </div>
);

const Ue = memo(({ classes, children }) => {
  const [loaded, setLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && inView && !loaded) {
      setLoaded(true);
    }
  }, [inView, loaded, isClient]);

  return (
    <div ref={ref} className={classes}>
      {loaded ? (
        <Suspense fallback={<Loader />}>{children}</Suspense>
      ) : (
        <Loader />
      )}
    </div>
  );
});

export default Ue;
