export default function Bullet({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
      <li className={`text-gray-100 gap-1 whitespace-wrap text-sm font-normal sm:text-base lg:text-[18px] my-1 ${className}`}>
        {children}
      </li>
  );
}
