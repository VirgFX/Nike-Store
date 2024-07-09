import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons"
import {
  bigShoe10,
  bigShoe11,
  bigShoe4,
  bigShoe5,
  bigShoe6,
  bigShoe7,
  bigShoe8,
  bigShoe9,
  customer1,
  customer2,
  smallShoe1,
  smallShoe2,
  smallShoe3,
  smallShoe4,
  smallShoe5,
  smallShoe6,
  smallShoe7,
  smallShoe8,
  smallShoe9,
  smallShoe10,
  thumbnailShoe10,
  thumbnailShoe11,
  thumbnailShoe4,
  thumbnailShoe5,
  thumbnailShoe6,
  thumbnailShoe7,
  thumbnailShoe8,
  thumbnailShoe9,
} from "../assets/images"

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  {
    href: "#special-offers",
    label: "Shop by Discount",
  },
  { href: "#contact-us", label: "Contact Us" },
]

export const shoes = [
  {
    thumbnail: thumbnailShoe4,
    bigShoe: bigShoe4,
  },
  {
    thumbnail: thumbnailShoe5,
    bigShoe: bigShoe5,
  },
  {
    thumbnail: thumbnailShoe6,
    bigShoe: bigShoe6,
  },
  {
    thumbnail: thumbnailShoe7,
    bigShoe: bigShoe7,
  },
  {
    thumbnail: thumbnailShoe8,
    bigShoe: bigShoe8,
  },
  {
    thumbnail: thumbnailShoe9,
    bigShoe: bigShoe9,
  },
  {
    thumbnail: thumbnailShoe10,
    bigShoe: bigShoe10,
  },
  {
    thumbnail: thumbnailShoe11,
    bigShoe: bigShoe11,
  },
]

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
]

export const products = [
  {
    imgURL: smallShoe1,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: smallShoe2,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: smallShoe3,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: smallShoe4,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
  {
    imgURL: smallShoe5,
    name: "Nike Air Jordan-02",
    price: "$220.20",
  },
  {
    imgURL: smallShoe6,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: smallShoe7,
    name: "Nike Air Jordan-105",
    price: "$215.20",
  },
  {
    imgURL: smallShoe8,
    name: "Nike Air Jordan-111",
    price: "$200.20",
  },
  {
    imgURL: smallShoe9,
    name: "Nike Air Jordan-106",
    price: "$250.20",
  },
  {
    imgURL: smallShoe10,
    name: "Nike Air Jordan-005",
    price: "$235.20",
  },
]

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext:
      "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext:
      "Our dedicated team is here to assist you every step of the way.",
  },
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Steven Buston",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Jennefer Wilson",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
]

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "customer@nike.com",
        link: "mailto:customer@nike.com",
      },
      {
        name: "+92554862354",
        link: "tel:+92554862354",
      },
    ],
  },
]

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
]
