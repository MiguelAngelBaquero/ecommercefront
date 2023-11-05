import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const OrderCard = (props) => {
  const {
    id,
    title,
    imageUrl,
    price,
    quantity,
    addQuantity,
    lowerQuantity,
    handleDelete,
  } = props;
  return (
    <div className="flex items-center mb-3 w-full gap-3">
      <div className="flex">
        <figure className="w-20 h-20">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
      </div>
      <div className="flex flex-col items-start gap-3 w-full h-full">
        <div>
          <p className="text-sm font-light">{title}</p>
        </div>
        <div className="flex justify-between gap-2 w-full">
          <div className="flex items-center gap-2">
            <span className="text-sm font-light">qty</span>
            {lowerQuantity && (
              <div className="flex items-center justify-center border-solid border-2 border-black rounded-full text-sm font-light p-1 h-6 w-6">
                <MinusIcon
                  className="h-5 w-5 text-black cursor-pointer"
                  onClick={() => lowerQuantity(id)}
                />
              </div>
            )}
            <p className="text-sm font-light">{quantity}</p>
            {handleDelete && (
              <div className="flex items-center justify-center border-solid border-2 border-black rounded-full text-sm font-light p-1 h-6 w-6">
                <PlusIcon
                  className="h-5 w-5 text-black cursor-pointer"
                  onClick={() => addQuantity(id)}
                />
              </div>
            )}
          </div>
          <p className="text-lg font-medium">${price}</p>
          {handleDelete && (
            <div className="self-center">
              <TrashIcon
                className="h-5 w-5 text-black cursor-pointer"
                onClick={() => handleDelete(id)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
