import ButtonAddLab from "./components/buttons/button-add-lab";
import CardLabs from "./components/card/card-labs";
import SearchbarMain from "./components/searchbar/search-bar-main";
import { MockLabs } from "./mockData/labs-mock";
interface labs {
  id: number;
  name: string;
  horario_inicio: string;
  horario_fim: string;
}

export default function Root(props) {
  return (
    <div className="">
      <SearchbarMain />
      <div className=" flex w-full justify-center">
        <div className="grid justify-items-center min-[980px]:grid-cols-3 w-full max-w-md:h-[600px] max-w-7xl  max-w-md:overflow-y-auto gap-10 my-7">
          {MockLabs.map((lab: labs) => {
            return (
              <CardLabs
                id={lab.id}
                name={lab.name}
                horario_inicio={lab.horario_inicio}
                horario_fim={lab.horario_fim}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-end px-4">
        <ButtonAddLab />
      </div>
    </div>
  );
}
