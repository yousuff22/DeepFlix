const VideoInfo = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-38 px:6 md:px-12 absolute text-white bg-gradient-to-r from-black pl-4 md:pl-5">
      <h1 className="text-2xl md:text-5xl ml-4 font-bold">{title}</h1>
      <p className="hidden md:inline-block ml-4 py-6 text-md w-1/3 font-bold">{overview}</p>
      <div className="my-2 md:m-0">
        <button className="ml-4 bg-white text-black py-1 md:py-4 px-5 md:px-14 text-md rounded-lg font-bold cursor-pointer hover:bg-gray-300">
          ▷ Play
        </button>
        <button className="hidden md:inline-block ml-4 bg-gray-500 text-white p-4 px-12 text-md rounded-lg font-bold cursor-pointer mx-3">
          🛈 MoreInfo
        </button>
      </div>
    </div>
  );
};
export default VideoInfo;
