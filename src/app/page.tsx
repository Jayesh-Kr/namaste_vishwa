
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-center">
        <h1 
          className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl pt-[50px]"
          style={{ fontFamily: 'var(--font-kalam)' }}
        >
          नमस्ते
        </h1>
        <h2 
          className="text-7xl md:text-[10rem] lg:text-[12rem] font-bold ml-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-2xl pt-[42px]"
          style={{ fontFamily: 'var(--font-kalam)' }}
        >
          विश्व
        </h2>
      </div>
      <div className="mt-12 text-xl text-gray-400 font-light tracking-wide">
        Welcome to the World
      </div>
    </div>
  );
}
