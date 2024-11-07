import { PolicyOneProps } from "../../types";
const PolicyOne = ({ title, content }: PolicyOneProps) => {
  return (
    <div className="text-xl mb-4">
      <h3 className="font-bold text-slate-600">{title}</h3>
      <p className="py-2">{content}</p>
      <button className="bg-red-800 text-white py-1 px-2 rounded-md outline-none hover:bg-red-700 duration-150">
        Read more
      </button>
    </div>
  );
};

export default PolicyOne;
