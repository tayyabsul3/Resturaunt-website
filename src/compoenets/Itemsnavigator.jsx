import { Link as Link2 } from "react-scroll";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../features/cartSlice";

const Itemsnavigator = ({ setproductObject, setDraweropen }) => {
  const menuitmes = [
    {
      id: 1,
      title: "I'm Back!",
    },
    {
      id: 2,
      title: "Starters",
    },
    {
      id: 3,
      title: "Somewhat Local",
    },
    {
      id: 4,
      title: "Somewhat Sooper",
    },
    {
      id: 5,
      title: "Cheezy Treats",
    },
    {
      id: 6,
      title: "Pizza Deals",
    },
    {
      id: 7,
      title: "Sandwiches & Platters",
    },
    {
      id: 8,
      title: "Special Pizza",
    },
    {
      id: 9,
      title: "Somewhat Amazing",
    },
    {
      id: 10,
      title: "Pastas",
    },
    {
      id: 11,
      title: "Burgerz",
    },
    {
      id: 12,
      title: "Side Orders",
    },
    {
      id: 13,
      title: "Addons",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Fettuccine Alfredo Pasta",
      description:
        "Pasta Made In Yummiest White Sauce With Chicken Chunks Topped With Cheese",
      price: 990,
      category: "I'm Back!",
      image: "./images/Fettuccine Alfredo Pasta.webp",
      quantity: 1,
    },
    {
      id: 2,
      name: "Cheezy Sticks",
      description:
        "Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.",
      price: 590,
      category: "Starters",
      image: "./images/Cheezy Sticks.webp",
      quantity: 1,
    },
    {
      id: 3,
      name: "Oven Baked Wings",
      description: "Fresh Oven Baked Wings Served With Dip Sauce",
      price: 550,
      category: "Starters",
      image: "./images/Oven Baked Wings.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        pcs6: 550,
        pcs12: 1050,
      },
    },
    {
      id: 4,
      name: "Flaming Wings",
      description:
        "Fresh Oven Baked Wings Tossed In Hot Peri Peri Sauce And Served With Dip Sauce",
      price: 600,
      category: "Starters",
      image: "./images/Flaming Wings.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        pcs6: 600,
        pcs12: 1150,
      },
    },

    {
      id: 5,
      name: "Calzone Chunks",
      description: "4 Pcs Stuffed Calzone Chunks Served with Sauce & Fries",
      price: 1050,
      category: "Starters",
      image: "./images/Calzone Chunks.webp",
      quantity: 1,
    },

    {
      id: 6,
      name: "Arabic Rolls",
      description:
        "4 Pcs Arabic Rolls Stuffed with Yummiest Mix Served with Sauce",
      price: 650,
      category: "Starters",
      image: "./images/Arabic Rolls.webp",
      quantity: 1,
    },
    {
      id: 7,
      name: "Behari Rolls",
      description:
        "4 Pcs Behari Rolls Stuffed with Yummiest Mix Served with Sauce",
      price: 650,
      category: "Starters",
      image: "./images/Behari Rolls.webp",
      quantity: 1,
    },
    {
      id: 8,
      name: "Chicken Tikka",
      description:
        "Tender Chunks of Marinated Grilled Chicken with Savory Onion",
      price: 590,
      category: "Somewhat Local",
      image: "./images/Chicke Tikka.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 9,
      name: "Chicken Fajita",
      description:
        "An Authentic Taste of Fajita Marinated Chicken Onion and Bell Peppers.",
      price: 590,
      category: "Somewhat Local",
      image: "./images/Chicken Fajita.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 10,
      name: "Chicken Lover",
      description:
        "Extreme Quantity of Chicken and Onion with Rich Mozzarella Cheese",
      price: 590,
      category: "Somewhat Local",
      image: "./images/Chicken Lover.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 11,
      name: "Vegetable Pizza",
      description: "Vegetables, Pizza Sauce And Cheese",
      price: 590,
      category: "Somewhat Local",
      image: "./images/Vegetable Pizza.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 12,
      name: "Chicken Tandoori",
      description:
        "Our Traditionally Developed Tandoori Chicken with Onion, Olives, Jalapeno and Tomato Sauce",
      price: 590,
      category: "Somewhat Local",
      image: "./images/Chicken Tandoori.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 13,
      name: "Hot n Spicy",
      description: "Hot and Spicy Chicken Onion, Jalapeno",
      price: 590,
      category: "Somewhat Local",
      image: "./images/Hot n Spicy.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 14,
      name: "Chicken Mushroom",
      description:
        "Tender Chunks of Marinated Grilled Chicken Tikka, Lots of Mushrooms, Onion and Tomato Sauce",
      price: 590,
      category: "Somewhat Sooper",
      image: "./images/Chicken Mushroom.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 15,
      name: "Euro",
      description:
        "Delight Combination of Specially Marinated Smoked Chicken Bell Pepper, Mushrooms with Tomato Sauce",
      price: 590,
      category: "Somewhat Sooper",
      image: "./images/Euro.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 16,
      name: "Chicken Supreme",
      description:
        "A Combination Of 3 Flavors of Chicken, Black Olives, Mushrooms Bell Pepper and Onion with Tomato Sauce.",
      price: 590,
      category: "Somewhat Sooper",
      image: "./images/Chicken Supreme.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 17,
      name: "Cheese Lover Pizza",
      description: "Yummiest Blend of Cheese and Pizza Sauce",
      price: 590,
      category: "Somewhat Sooper",
      image: "./images/Cheese Lover Pizza.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 18,
      name: "Chicken Pepperoni Pizza",
      description: "Chicken Pepperoni, Pizza Sauce and Cheese",
      price: 590,
      category: "Somewhat Sooper",
      image: "./images/Chicken Pepperoni Pizza.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 19,
      name: "Black Pepper Tikka",
      description:
        "A Blend of Marinated Black Pepper Chicken, Onion & Bell Pepper",
      price: 590,
      category: "Somewhat Sooper",
      image: "./images/Black Pepper Tikka.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Small: 590,
        Regular: 1250,
        Large: 1650,
        Party: 2700,
      },
    },
    {
      id: 20,
      name: "Cheezious Special",
      description:
        "Delicious Special Chicken with Black Olives, Sausages and Bell Pepper",
      price: 1450,
      category: "Cheezy Treats",
      image: "./images/Cheezious Special.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 21,
      name: "Behari Kebab",
      description:
        "Enjoy Special Chicken Bihari Kabab, Grilled Chicken with Onion Jalapenos and Ginger Garnishing",
      price: 1450,
      category: "Cheezy Treats",
      image: "./images/Behari Kebab.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 22,
      name: "Chicken Extreme",
      description:
        "Combination Of 3 Flavors of Chicken with Onion Bell Pepper,Green Olives, Mushrooms and Special Sauce",
      price: 1450,
      category: "Cheezy Treats",
      image: "./images/Chicken Extreme.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 23,
      name: "Small Pizza Deal",
      description:
        "Any Flavor From Local Love Or Over the Sea Flavor Category & 1 Soft Drink",
      price: 650,
      category: "Pizza Deals",
      image: "./images/Small Pizza Deal.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 24,
      name: "Regular Pizza Deal",
      description: "1 Regular Pizza and 2 Regular Drinks.",
      price: 1350,
      category: "Pizza Deals",
      image: "./images/Regular Pizza Deal.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 25,
      name: "Large Pizza Deal",
      description:
        "Any Flavor From Local Love Or Over the Sea Flavor Category & 1 Liter Drink",
      price: 1790,
      category: "Pizza Deals",
      image: "./images/Large Pizza Deal.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 26,
      name: "Special Roasted Platter",
      description: "4 Pcs Behari Rolls, 6pcs Wings Served with Fries & Sauce",
      price: 1080,
      category: "Sandwiches & Platters",
      image: "./images/Special Roasted Platter.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 27,
      name: "Mexican Sandwich",
      description:
        "Mozzarella Dipped Chicken Topped with Garlic Sauce, Tomato’s Served in Baked Bread.",
      price: 850,
      category: "Sandwiches & Platters",
      image: "./images/Mexican Sandwich.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 28,
      name: "Pizza Stacker",
      description:
        "A Unique Blend of Delicious Sauce, Crispy Chicken and Pizza Crust.",
      price: 850,
      category: "Sandwiches & Platters",
      image: "./images/Pizza Stacker.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 29,
      name: "Euro Sandwich",
      description:
        "Mozzarella Dipped Black Pepper Chicken Topped with Garlic Sauce, Pineapples and Tomato’s Served in Baked Bread.",
      price: 850,
      category: "Sandwiches & Platters",
      image: "./images/Euro Sandwich.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 30,
      name: "Classic Roll Platter",
      description:
        "4Pcs Behari Rolls, 4pcs Arabic Rolls Served with Fries & Sauce",
      price: 1080,
      category: "Sandwiches & Platters",
      image: "./images/Classic Roll Platter.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 31,
      name: "Crown Crust",
      description:
        "Scrumptious Pizza with A Yummy Blend of Grilled Chicken, Olives, Onion, Capsicum and Special Sauce",
      price: 1450,
      category: "Special Pizza",
      image: "./images/Crown Crust.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 32,
      name: "Stuff Crust Pizza",
      description:
        "Special Chicken, Green Olives, Mushroom, Edges Filled With Cheese Or Kabab",
      price: 1500,
      category: "Special Pizza",
      image: "./images/Stuff Crust Pizza.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 33,
      name: "Somewhat Amazing 1",
      description: "2 Bazinga, Regular Fries, 2 Regular Drink",
      price: 1150,
      category: "Somewhat Amazing",
      image: "./images/Somewhat Amazing 1.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 34,
      name: "Somewhat Amazing 2",
      description:
        "2 Bazinga Burger,2 Pcs Chicken, Large Fries,2 Regular Drink",
      price: 1550,
      category: "Somewhat Amazing",
      image: "./images/Somewhat Amazing 2.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 35,
      name: "Somewhat Amazing 3",
      description: "3 Bazinga Burger, Large Fries, 1 Liter Drink",
      price: 1750,
      category: "Somewhat Amazing",
      image: "./images/Somewhat Amazing 3.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 36,
      name: "Somewhat Amazing 4",
      description: "3 Bazinga, 3 Chicken Pieces, 1 Liter Drink",
      price: 1850,
      category: "Somewhat Amazing",
      image: "./images/Somewhat Amazing 4.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 37,
      name: "Crunchy Chicken Pasta",
      description:
        "Yummiest Macaroni Pasta in White Sauce Topped with Crispy Chicken & Cheese",
      price: 1850,
      category: "Pastas",
      image: "./images/Crunchy Chicken Pasta.webp",
      hasRange: true,
      quantity: 1,
      startingfrom: {
        Regular: 1450,
        Large: 1850,
        Party: 2900,
      },
    },
    {
      id: 38,
      name: "Fettuccine Alfredo Pasta",
      description:
        "Pasta Made In Yummiest White Sauce With Chicken Chunks Topped With Cheese",
      price: 990,
      category: "Pastas",
      image: "./images/Fettuccine Alfredo Pasta.webp",
      quantity: 1,
    },
    {
      id: 39,
      name: "Bazinga Supreme",
      description:
        "2 Crispy Fried To Perfection Boneless Thigh with Signature Sauce, Lettuce and A Cheese Slice Held in Corn-Dusted Bun.",
      price: 730,
      category: "Burgerz",
      image: "./images/Bazinga Supreme.webp",
      quantity: 1,
    },
    {
      id: 40,
      name: "Reggy Burger",
      description:
        "Perfectly Fried Chicken Patty With Fresh Lettuce and Sauce in a Sesame Seed Bun",
      price: 390,
      category: "Burgerz",
      image: "./images/Reggy Burger.webp",
      quantity: 1,
    },
    {
      id: 41,
      name: "Bazinga Burger",
      description:
        "Crispy Fried To Perfection Boneless Thigh with Signature Sauce and Lettuce Held in Corn-Dusted Bun.",
      price: 530,
      category: "Burgerz",
      image: "./images/Bazinga Burger.webp",
      quantity: 1,
    },
    {
      id: 42,
      name: "Fries",
      description: "Crispy Fried To Fries",
      price: 390,
      category: "Side Orders",
      image: "./images/Fries.webp",
      quantity: 1,
    },
    {
      id: 43,
      name: "Nuggets",
      description: "5 Pcs",
      price: 270,
      category: "Side Orders",
      image: "./images/5 Pcs.webp",
      quantity: 1,
    },
    {
      id: 44,
      name: "Mayo Dip",
      description: "",
      price: 70,
      category: "Addons",
      image: "./images/Mayo Dip.webp",
      quantity: 1,
    },
    {
      id: 45,
      name: "Juics",
      description: "",
      price: 50,
      category: "Addons",
      image: "./images/Juice.webp",
      quantity: 1,
    },
    {
      id: 46,
      name: "Water Small",
      description: "",
      price: 50,
      category: "Addons",
      image: "./images/Water Small.webp",
      quantity: 1,
    },
    {
      id: 47,
      name: "Soft Drink",
      description: "",
      price: 70,
      category: "Addons",
      image: "./images/Soft Drink.webp",
      quantity: 1,
    },
  ];
  const dispatch = useDispatch();

  function handleCardClick(product) {
    setproductObject(product);
    console.log(product);
  }

  // Function to handle adding a product to the cart
  function handleAddToCartPress(product) {
    console.log(product);
    dispatch(addtocart(product));
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="md:mt-2 flex justify-center items-center ">
        <div className="scroll container lg:w-full mx-auto flex lg:overflow-visible lg:min-h-20 lg:flex-wrap justify-between pl-5 items-center overflow-x-auto w-[90%]">
          <div className=" flex lg:flex-wrap justify-center items-center gap-2 md:gap-4 md:my-2 h-20 lg:min-h-10  ">
            {menuitmes.map((item) => (
              <Link2
                to={`${item.title}`}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                key={item.title}
                // Add activeClass prop
                className="linkitem bg-slate-200 rounded-full   lg:text-[16px] lg:py-3 lg:px-4 py-2 px-2 hover:bg-yellow-300 cursor-pointer font-bold text-nowrap text-sm  "
              >
                {item.title}
              </Link2>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      {menuitmes.map((item) => (
        <section
          key={item.id}
          id={`${item.title}`}
          className=" flex flex-col  mb-10 mt-5 md:mt-10 p-2 last:pb-20"
        >
          <div className="divider border-t border-gray-300 mb-5 " />
          <div>
            <h2 className="text-xl md:2xl lg:text-3xl pl-2 lg:pl-10 font-bold ">
              {item.title}
            </h2>
            <div className="cards pl-2 lg:pl-8 mt-2 lg:mt-5 flex flex-wrap gap-5 md:gap- ">
              {products
                .filter((product) => product.category === item.title) // Filter products based on category
                .map(
                  (
                    matchingproduct // Mapping over filtered products
                  ) => (
                    <Link
                      to="product"
                      state={{
                        product: matchingproduct,
                      }}
                      className="w-[150px] md:w-[max-content]"
                      key={matchingproduct.id}
                    >
                      <div
                        className="
                        max-w-[150px]
                        lg:max-w-[200px] 
                        card bg-white md:max-w-[230px] p-1 rounded-3xl border-[2px]  border-gray-100 hover:border-yellow-300 hover:border-2 hover:shadow-md shadow-sm cursor-pointer"
                        onClick={() => {
                          handleCardClick(matchingproduct.id);
                        }}
                      >
                        <div className="image w-full relative mb-4 ">
                          <img
                            src={matchingproduct.image}
                            alt="logo"
                            className="rounded-2xl w-full"
                            loading="lazy"
                          />
                        </div>
                        {/* <div className="heart bg-gray-300 w-min rounded-full p-1 absolute top-1 right-1">
                          <RiHeartLine className="text-2xl text-white" />
                        </div> */}
                        <div className="description md:mt-2">
                          <h1 className="font-bold md:text-lg text-center text-sm">
                            {matchingproduct.name}
                          </h1>
                          <p
                            className="text-center md:text-[14px]  text-[12px] "
                            title={matchingproduct.description}
                          >
                            {matchingproduct.description.length > 20
                              ? matchingproduct.description
                                  .substring(0, 30)
                                  .concat("  ...more")
                              : matchingproduct.description}
                          </p>
                        </div>
                        <div className="divider border-t border-gray-300 md:mb-2 mt-5" />
                        <div className="pricing flex flex-col justify-center items-center">
                          <h3 className="font-bold text-md text-center text-red-500 ">
                            Rs {matchingproduct.price.toFixed(2)}
                          </h3>
                          <Link to={"/"} className="addtocartbutton">
                            <button
                              className=" bg-red-600 text-sm py-2 px-2  md:px-3 font-bold md:py-3 rounded-full  text-white hover:bg-yellow-400 hover:text-black mt-1 mb-1  "
                              onClick={() => {
                                handleAddToCartPress(matchingproduct);
                              }}
                            >
                              Add to cart
                              {}
                              {/* <div className="quantitycontroller flex gap-3 items-center">
                                <button className="subtract-button p-2  text-red-600 bg-white hover:bg-yellow-300  text-xl rounded-full">
                                  <FaMinus />
                                </button>
                                <p className="text-2xl rounded-3xl text-white">
                                  1
                                </p>
                                <button className="add-button active:pt-2 p-2 text-red-600 bg-white hover:bg-yellow-300  text-xl rounded-full ">
                                  <FaPlus />
                                </button>{

                                }
                              </div> */}
                              {/* <button
className=" bg-red-600 px-2 font-bold py-2 rounded-full  text-white hover:bg-yellow-400 hover:text-black mt-1 mb-1  "
onClick={handleAddtoacartpress}
>

<div className="quantitycontroller flex gap-3 items-center">
  <button className="subtract-button p-2  text-red-600 bg-white hover:bg-yellow-300  text-xl rounded-full">
    <FaMinus/>
  </button>
  <p className="text-2xl rounded-3xl text-white">
    1
  </p>
  <button className="add-button active:pt-2 p-2 text-red-600 bg-white hover:bg-yellow-300  text-xl rounded-full ">
    <FaPlus/>
  </button>
</div>
</button> */}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  )
                )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Itemsnavigator;
