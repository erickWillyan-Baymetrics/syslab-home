import AddIcon from "../../assets/image/icon-add.svg";

export default function ButtonAddLab() {
  return (
    <button className="flex items-center text-blueMedium font-bold border-2 border-blueMedium px-7 py-1 rounded-3xl">
      <img src={AddIcon} alt="ìcone de adicionar" className="h-5 w-5 mr-2" />
      Adicionar Novo
    </button>
  );
}
