import { star } from "../assets/icons"

export const PopularProductCard = ({
  imgURL,
  name,
  price,
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full bg-slate-50 rounded-xl">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] bg-hero bg-cover bg-center rounded-xl"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-mono font-bold  text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin ">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-mono text-coral-red text-2xl leading-normal ">
        {price}
      </p>
    </div>
  )
}
