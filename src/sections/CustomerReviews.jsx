import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        <span className="text-coral-red">
          Testimonials
        </span>{" "}
        from Our{" "}
        <span className="text-coral-red">
          {" "}
          Customers
        </span>
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-justify">
        Discover why our customers love us! Here
        are some reviews from those who have
        experienced the quality and comfort of our
        Nike shoes. Read their testimonials to see
        how our products have enhanced their
        performance and style. Join our satisfied
        customers and step up your game with Nike
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
