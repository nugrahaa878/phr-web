import docter2Img from "../../../../assets/images/docter-2.png";
import profileIconImg from "../../../../assets/images/profile-icon.png";

interface Props {
  isDoctor: boolean;
}

const HeaderHome = ({ isDoctor }: Props) => {
  return (
    <div className="flex border-b-2 py-3 px-4 items-center gap-5">
      <img
        src={isDoctor ? docter2Img : profileIconImg}
        alt=""
        width={50}
        height={50}
      />
      <h3 className="text-2xl font-bold text-mainGrey">Halo, Raihan</h3>
    </div>
  );
};

export default HeaderHome;
