import Chip from "../../../components/chip";

interface StepItemProps {
  chip: string;
  title: string;
  children: React.ReactNode;
}

const StepItem = ({ chip, title, children }: StepItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:gap-4 lg:mb-5">
        <Chip>{chip}</Chip>
        <p className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
          {title}
        </p>
      </div>
      {children}
    </div>
  );
};

export default StepItem;
