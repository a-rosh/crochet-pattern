interface ButtonProps {
  name: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer bg-primary-container text-on-primary-container font-label-lg text-label-lg px-6 py-2.5 rounded-full shadow-sm hover:shadow-md active:scale-95 transition-all flex items-center gap-2"
    >
      <span className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#6a1a1f"
        >
          <path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v320L680-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54h-82l-7-40-433 77 40 226v279q-16-9-27.5-24T158-276L81-710Zm279 110v440h280l160-160v-280H360Zm220 220Zm-40 160h80v-120h120v-80H620v-120h-80v120H420v80h120v120Z" />
        </svg>
      </span>
      {name || ""}
      {/* <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
            </div> */}
    </button>
  );
};
