export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <ul className="gap-1.5 sm:gap-2 list-disc list-inside">
      <li className="text-[#ffffff] text-lg sm:text-xl lg:text-[24px] font-medium">{children}</li>
    </ul>
  );
}
