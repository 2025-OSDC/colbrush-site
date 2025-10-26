export default function Bullet({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={`whitespace-wrap my-1 gap-1 text-sm leading-6.5 font-normal text-gray-100 sm:text-base lg:text-[18px] ${className}`}
    >
      {children}
    </li>
  );
}
