interface InfoTipProps {
  text: string;
  children: React.ReactNode;
}
export const InfoTipProjects: React.FC<InfoTipProps> = ({ text, children }) => {
  return (
    <div className="relative flex items-center select-none">
      <div className="group relative flex">
        {children}
        <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 mb-2 w-max bg-white font-medium text- text-[#111111] text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 transition-all duration-100">
          {text}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white"></span>
        </span>
      </div>
    </div>
  );
};
