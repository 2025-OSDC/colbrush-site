type TGradientTitle = {
  big?: boolean;
  children: React.ReactNode;
};

export function GradientTitle({ big = false, children }: TGradientTitle) {
  const gradientStyle = {
    background: "linear-gradient(90deg, #8144FF 0%, #C89AE8 100%)",
    backGroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <h1
      style={gradientStyle}
      className={`${big ? "text-xl sm:text-2xl lg:text-[32px]" : "text-lg sm:text-xl lg:text-[28px]"} font-semibold`}
    >
      {children}
    </h1>
  );
}
