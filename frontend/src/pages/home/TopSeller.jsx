import BookCard from "../books/BookCard";

const TopSeller = () => {
  const categories = ["Choose your genre", "Fantasy", "Fiction", "Science"];

  return (
    <div className="mt-20">
      <h1 className="font-semibold ">Top Seller</h1>
      <select
        value="category"
        className="p-3 bg-slate-100 rounded-lg focus-visible: mt-7"
      >
        {categories.map((c) => {
          return (
            <option key={c} value={c}>
              {c}
            </option>
          );
        })}
      </select>

      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default TopSeller;
