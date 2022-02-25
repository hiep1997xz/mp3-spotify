import React from "react";

const DetailSong = () => {
  return (
    <div className="col-span-1 p-3">
      <div className="text-cyan-500 font-bold">Now playing</div>
      <div className="text-neutral-400 text-2xl">Sing my to leep</div>
      <div className="w-[240px] m-auto mt-10">
        <img
          className="w-full"
          src="https://i.scdn.co/image/ab6761610000e5eb2d530c07b6c9f629e3327175"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[70px] rounded-full"
          src="https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46"
          alt="avatar"
        />
        <span className="text-xl text-white">Diviners</span>
      </div>
    </div>
  );
};

export default DetailSong;
