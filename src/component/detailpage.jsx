import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../zustand/store";
import Navbar from "./navbar";
import Image from "./mini-component/image";
import Detail from "./mini-component/detail";

const DetailPage = () => {
  const { id } = useParams();
  const [setDetailProduct, detailProduct] = Store((state) => [
    state.setDetailProduct,
    state.detailProduct,
  ]);

  const product = detailProduct.msg;
  useEffect(() => {
    setDetailProduct(id);
  }, [setDetailProduct, id]);
  console.log(product);
  return (
    <div>
      <Navbar />
      <div>
        <Image image={product ? product.gambar_barang : ""} />
        <Detail
          nama_barang={product ? product.nama_barang : ""}
          harga={product ? product.harga : "a"}
        />
      </div>
    </div>
  );
};

export default DetailPage;
