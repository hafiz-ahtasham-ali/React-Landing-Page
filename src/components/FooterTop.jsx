const FooterTop = () => {
  return (
    <section className="relative w-full min-h-[250px] flex flex-col items-center justify-center bg-[#F5F7FA] text-[#4D4D4D] text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold m-3">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="bg-[#4CAF4F] text-white px-6 py-3 hover:bg-[#4a8659] rounded-lg mt-4 sm:mt-6">
          Meet all customers <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default FooterTop;