import Left from "../components/HomeBanner/left";
import Right from "../components/HomeBanner/right";

const Main = () => {
  return (
    <div className="grid grid-cols-5 w-screen h-screen">
      <div className="col-span-3 bg-white">
        <Left/>
      </div>
      <div className="col-span-2 bg-primary">
        <Right/>
      </div>
    </div>
  );
};

export default Main;
