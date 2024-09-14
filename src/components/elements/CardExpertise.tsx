import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Menggunakan destructuring untuk menerima props
const CardExpertise = ({ icon, title, desc, active }: { icon: any; title: string; desc: string; active: boolean }) => {
  return (
    <div className="relative w-60 h-40   text-center p-3 rounded-lg space-y-3 bg-[#323443]">
      <div className="absolute left-[105px] -top-4">
        <div className={`${active ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-gray-600"} p-[1.5px] rounded-full flex justify-center items-center shadow-lg`}>
          <FontAwesomeIcon className="bg-neutral-600 rounded-full p-1 fa-lg" icon={icon} />
        </div>
      </div>
      <h4 className="font-semibold text-center">{title}</h4>
      <p className="text-xs text-slate-300">{desc}</p>
    </div>
  );
};

export default CardExpertise;
