import MealsSearch from "@/components/MealsSearch";
import React from "react";

export const metadata = {
  title: "Meals",
  description: "Next Hero Meals Page",
};
const MealsPage = () => {
  return (
    <section>
      <MealsSearch/>
    </section>
  );
};

export default MealsPage;
