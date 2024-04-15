import React, { useState, useEffect } from "react";

const ShopStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date()); // State to hold the current time
  const [isOpen, setIsOpen] = useState(false); // State to track whether the shop is open or closed

  // useEffect to update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // useEffect to check if the shop is open or closed based on the current time
  useEffect(() => {
    const currentHour = currentTime.getHours(); // Get the current hour from the current time
    const openingHour = 15; // Shop opens at 3 PM (15:00)
    const closingHour = 3; // Shop closes at 3 AM (next day)

    // Check if the current hour is within the opening and closing hours
    if (
      (currentHour >= openingHour && currentHour <= 23) || // Between 3 PM and 11:59 PM
      (currentHour >= 0 && currentHour < closingHour) // Between 12:00 AM and 3 AM
    ) {
      setIsOpen(true); // Set isOpen to true if the shop is open
    } else {
      setIsOpen(false); // Set isOpen to false if the shop is closed
    }
  }, [currentTime]); // Update the isOpen state whenever the currentTime changes

  return (
    <>
    {isOpen ? ""
    :
        <div className="message h-10 bg-red-500 text-white text-center font-semibold pt-1">
         <p>The shop is closed.</p>
        </div> 
    }
   </>
  );
};

export default ShopStatus;
