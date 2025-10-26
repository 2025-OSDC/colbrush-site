interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const FeatureItem = ({ icon, title, children }: FeatureItemProps) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-2 sm:gap-3 lg:gap-3.5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4.5">
        <div className="flex items-center gap-2 sm:gap-4.5">
          {icon}
          <p className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
            {title}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default FeatureItem;
