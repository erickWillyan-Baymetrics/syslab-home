import iconClock from "../../assets/image/icon-clock.svg";

interface Labs {
  id: number;
  name: string;
  horario_inicio: string;
  horario_fim: string;
}
export default function CardLabs({
  id,
  name,
  horario_fim,
  horario_inicio,
}: Labs) {
  return (
    <div
      key={id}
      className="flex items-center justify-between bg-blueLight w-10/12 min-w-[330px] rounded-3xl px-7 min-h-28 shadow-md shadow-[#00000040]"
    >
      <div>
        <label className="text-base font-bold ">{name}</label>

        <div className="flex items-center mt-2">
          <img src={iconClock} alt="icon-clock" className="w-5 h-5 mr-2" />
          <p className="">
            {horario_inicio} - {horario_fim}
          </p>
        </div>
      </div>
      <button className="bg-blueMedium px-5 py-1 rounded-xl text-blueLight">
        Acessar
      </button>
    </div>
  );
}
