export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-inside list-disc">
      <li className="text-lg font-medium text-[#ffffff] sm:text-xl lg:text-[24px]">
        {children}
      </li>
    </ul>
  );
}
