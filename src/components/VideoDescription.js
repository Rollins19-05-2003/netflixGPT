const VideoDescription = ({title, overview}) => {
  return (
    <div className=" w-screen aspect-video pt-52 pl-20 absolute bg-gradient-to-r from-black">
        <h1 className="font-extrabold p-4 text-6xl text-white">{title}</h1>
        <h1 className="font-mono p-4 text-white w-1/2">{overview}</h1>
        <div className="flex">
            <button className="p-2 px-5 ml-4 mb-2 bg-white font-semibold text-2lg rounded-md">▶️ Play</button>
            <button className="p-2 px-5 ml-2 mb-2 text-white bg-gray-400 font-semibold text-2lg rounded-md bg-opacity-70">ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoDescription
