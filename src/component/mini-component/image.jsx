const Image = (props) => {
  const { image } = props;
  return (
    <div className=" bg-orange-400">
      <div className="p-5">
        <img
          className="w-72 mx-auto rounded-xl bg-slate-600"
          src={image}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Image;
