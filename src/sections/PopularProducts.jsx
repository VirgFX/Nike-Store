import { PopularProductCard } from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  const width = 280
  const height = 280
  const quantity = 10

  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5 sm:py-10">
        <h2 className="text-4xl font-palanquin font-bold">
          Our{" "}
          <span className="text-coral-red">
            Popular
          </span>{" "}
          Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience the perfect blend of style,
          comfort, and performance with Nike's
          popular shoes. Engineered for athletes
          and casual wearers alike, these shoes
          ensure unparalleled support and
          durability. Elevate your game!
        </p>
      </div>
      <div className="w-full h-[445px] overflow-hidden slider">
        <div
          className="flex relative"
          style={{
            minWidth: `calc(${width}px * ${quantity})`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className=" absolute item "
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: "100%",
                animation: `autoRun 10s linear infinite`,
                animationDelay: `calc((10s / ${quantity}) * ${index})`,
              }}
            >
              <PopularProductCard
                imgURL={product.imgURL}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
