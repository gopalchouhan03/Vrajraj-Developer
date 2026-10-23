const LogoLoader = () => (
  <div
    className="flex min-h-[50vh] items-center justify-center"
    role="status"
    aria-label="Loading page"
  >
    <img
      src="/vrajraj-logo.png"
      alt=""
      width="640"
      height="560"
      className="logo-loader h-24 w-28 object-contain"
    />
    <span className="sr-only">Loading page...</span>
  </div>
);

export { LogoLoader };
