import {
  ChevronRightIcon,
  ShoppingBagIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  const { id, totalPrice, totalProducts } = props;
  let itemsNumberString = "";
  totalProducts > 1
    ? (itemsNumberString = "items")
    : (itemsNumberString = "item");
  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-3">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="flex place-items-center">
            <CalendarDaysIcon className="h-4 w-4 text-black mr-2" />
            <span className="font-light">01.02.2023</span>
          </p>
          <p className="flex place-items-center">
            <ShoppingBagIcon className="h-4 w-4 text-black mr-2" />
            <span className="font-light">
              {totalProducts} {itemsNumberString}
            </span>
          </p>
        </div>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
