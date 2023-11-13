import Header from "../../../components/Header";
import riceImg from "../../../assets/images/food/rice.png";
import chickenImg from "../../../assets/images/food/chicken.png";
import fruitImg from "../../../assets/images/food/fruit.png";
import vegetableImg from "../../../assets/images/food/vegetable.png";
import milkImg from "../../../assets/images/food/milk.png";
import { useNavigate } from "react-router-dom";

const KonsumsiMakananTargetPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <Header title="Tracking Data Kesehatan" />

      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold text-mainGrey pl-4 mt-5">Ubah Target</h3>

        <div className="ml-4">
          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={riceImg} alt="rice" width={50} className="mr-3" />
                <p className="text-sm text-mainGrey">Makanan Pokok</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src={chickenImg}
                  alt="chicken"
                  width={50}
                  className="mr-3"
                />
                <p className="text-sm text-mainGrey">Lauk Pauk</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  src={vegetableImg}
                  alt="vegetables"
                  width={50}
                  className="mr-3"
                />
                <p className="text-sm text-mainGrey">Sayuran</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={fruitImg} alt="fruit" width={50} className="mr-3" />
                <p className="text-sm text-mainGrey">Buah</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img src={milkImg} alt="milk" width={50} className="mr-3" />
                <p className="text-sm text-mainGrey">Susu</p>
              </div>
              <input
                type="checkbox"
                name="radioOption"
                value="Demam"
                className="mr-2 justify-items-end"
              />
            </div>
            <div
              className="bg-slate-200 mt-3 ml-16"
              style={{ height: "2px" }}
            />
          </div>
        </div>

        <button
          className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mx-3 mb-6 mt-3"
          onClick={handleSubmit}
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default KonsumsiMakananTargetPage;
