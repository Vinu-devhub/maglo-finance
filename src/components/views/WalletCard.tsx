import DebitCardOne from "./DebitCardOne";
import DebitCardTwo from "./DebitCardTwo";

const WalletCard = () => {
  return (
    <div className=" relative mb-48">
      <DebitCardOne />
      <div className=" absolute top-40 w-11/12 left-4 ">
        <DebitCardTwo />
      </div>
    </div>
  );
};

export default WalletCard;
