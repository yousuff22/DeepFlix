const VideoInfo = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-38 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="ml-4 text-5xl font-bold">{title}</h1>
      <p className=" ml-4 py-6 text-md w-1/3 font-bold">{overview}</p>
      <div className="">
        <button className="ml-4 bg-white text-black p-4 px-14 text-md rounded-lg font-bold cursor-pointer hover:bg-gray-300">
          ▷ Play
        </button>
        <button className="ml-4 bg-gray-500 text-white p-4 px-12 text-md rounded-lg font-bold cursor-pointer mx-3">
          🛈 MoreInfo
        </button>
      </div>
    </div>
  );
};
export default VideoInfo;
