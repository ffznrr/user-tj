import { useEffect } from "react";
import { Store } from "../zustand/store";

const Category = () => {
  const [barang, getBarang] = Store((state) => [state.barang, state.getBarang]);

  useEffect(() => {
    getBarang();
  }, [getBarang]);
  const product = barang.msg || [];
  return (
    <div className="p-10 font-Jaro">
      <form>
        <label
          className="text-2xl mx-5"
          htmlFor="kategori"
        >
          Kategori
        </label>
        <select
          className="text-2xl border-2 rounded-lg"
          id="kategori"
          name="kategori"
        >
          <option value="semua">semua</option>
          <option value="minuman">minuman</option>
          <option value="makanan">makanan</option>
        </select>
      </form>
      <div className="p-5 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {product.map((data) => (
          <div className="card w-92 bg-base-100 shadow-xl my-5 md:m-5">
            <figure>
              <img
                src={data.gambar_barang}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {data.nama_barang}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                perferendis.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{data.kategori}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
