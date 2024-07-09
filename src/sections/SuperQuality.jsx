import shoe9 from "../assets/images/shoe9.png"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className=" flex-1 flex justify-center items-center">
        <img
          className=" bg-hero bg-cover bg-center
          rounded-xl"
          src={shoe9}
          alt="shoe9"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Ultimate{" "}
          <span className="text-coral-red">
            comfort
          </span>{" "}
          , unmatched{" "}
          <span className="text-coral-red">
            style
          </span>{" "}
          , superior{" "}
          <span className="text-coral-red">
            performance
          </span>{" "}
          .
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover our premium collection of Nike
          shoes, designed for ultimate comfort,
          cutting-edge style, and superior
          performance. Elevate your game with
          footwear that redefines quality and
          innovation.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Shop now for the perfect blend of style
          and function.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
    </section>
  )
}

export default SuperQuality
