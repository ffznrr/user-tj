import { useEffect, useState } from "react";
import { Store } from "../zustand/store";

const Category = () => {
  const [barang, getBarang] = Store((state) => [state.barang, state.getBarang]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    getBarang();
  }, [getBarang]);

  useEffect(() => {
    if (barang.msg) {
      setFilterProduct(barang.msg);
    }
  }, [barang]);

  const handleCategory = (event) => {
    const isi = event.target.value;
    let filtered = [];

    if (isi === "minuman") {
      filtered = barang.msg.filter((data) => data.kategori === "minuman");
    } else if (isi === "makanan") {
      filtered = barang.msg.filter((data) => data.kategori === "makanan");
    } else {
      filtered = barang.msg; // show all products if no category selected
    }

    setFilterProduct(filtered);
  };

  const DetailPage = (product) => {
    console.log(product);
  };

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
          onChange={(event) => handleCategory(event)}
        >
          <option value="semua">semua</option>
          <option value="minuman">minuman</option>
          <option value="makanan">makanan</option>
        </select>
      </form>
      <div className="p-5 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {filterProduct.map((product) => (
          <div
            key={product.id}
            className="card w-92 bg-base-100 shadow-xl my-5 md:m-5"
            onClick={() => DetailPage(product)}
          >
            <figure>
              <img
                src={product.gambar_barang}
                alt={product.nama_barang}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.nama_barang}
                {product.isNew && (
                  <div className="badge badge-secondary">NEW</div>
                )}
              </h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{product.kategori}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
