import SearchIcon from "../../assets/image/search-icon.svg";

export default function SearchbarMain() {
  return (
    <div className="flex justify-center mt-7 ">
      <input
        placeholder="Pesquisar"
        type="text"
        className=" px-7 py-1 outline-none border-2 w-3/4 bg-white border-grayPrimary rounded-l-lg border-r-[1px] font-normal text-base placeholder-grayPrimary"
      />
      <button className="border-grayPrimary border-2 border-l-[1px] bg-white  px-4 rounded-r-lg">
        <img src={SearchIcon} alt="Icone de busca" className=" h-5 w-5" />
      </button>
    </div>
  );
}
