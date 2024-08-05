import "../App.css";
import Headphones from "../Components/Headphones";
import "../index.css";

const Home = () => {
  return (
    <main className=" bg-neutral bg-cover flex flex-row w-full h-lvh ">
      <div className="flex-1 flex flex-col gap-4  justify-center items-center  w-50">
        <div className="  text-primary">
          <span className="font-['Bebas_Neue'] text-9xl">San</span>
          <span className="font-['Tiro_Devanagari_Hindi'] text-9xl font-thin">
            गीत
          </span>
        </div>
        <div className="flex gap-3">
          <div className="btn btn-primary btn-outline rounded-full w-24  ">
            Login
          </div>
          <div className="btn btn-primary btn-outline rounded-full w-24">
            Sign Up
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center w-50">
        <Headphones />
      </div>
    </main>
  );
};

export default Home;
