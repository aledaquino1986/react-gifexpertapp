import React from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const initialCategories = ["One Punch"];

  const [categories, setCategories] = React.useState(initialCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => {
          return <GifGrid category={category} key={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
