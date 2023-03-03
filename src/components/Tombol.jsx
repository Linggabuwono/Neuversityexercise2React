function Tombol({ title, color}) {
  return (
    <>
      <button
        className={`bg-${color}-600 rounded-md text-white font-medium px-3 py-2 mx-5 mt-5`}>
        {title}
      </button>
    </>
  );
};

export default Tombol;
