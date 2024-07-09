import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section
      className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container"
      id="special-offers"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">
            Special
          </span>{" "}
          offer
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          "Limited-time offer! Enjoy a 30%
          discount on all Nike shoes when you use
          code NIKE20 at checkout. Don’t miss your
          chance to step up your game. Offer valid
          until Sunday at midnight. Shop now and
          save big on your favorite Nikes!"
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Step up your game—shop Nike shoes now
          and save big!
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button
            label="Shop now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-coral-red"
          />
        </div>
      </div>
      <div className="flex-1">
        <img
          src={offer}
          alt="special offers"
          width={773}
          height={687}
          className="object-contain w-f"
        />
      </div>
    </section>
  )
}

export default SpecialOffers
