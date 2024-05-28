const Detail = (props) => {
  const { nama_barang, harga } = props;
  return (
    <div className="w-full h-screen bg-sky-400 p-[105px] py-3 ">
      <div className="h-96">
        <h1 className="text-5xl">{nama_barang}</h1>
        <h1 className="text-5xl">
          Rp.
          {harga.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </h1>
      </div>
    </div>
  );
};

export default Detail;
