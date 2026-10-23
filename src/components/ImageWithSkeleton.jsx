import { useState } from "react";

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  ...imageProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span
      className={`relative block overflow-hidden ${containerClassName}`}
    >
      {!isLoaded && (
        <span
          aria-hidden="true"
          className="image-skeleton absolute inset-0"
        />
      )}
      <img
        {...imageProps}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`relative block ${className}`}
      />
    </span>
  );
};

export { ImageWithSkeleton };
