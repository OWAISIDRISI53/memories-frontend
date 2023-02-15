import React, { useContext } from "react";

import profileImage from "../../assets/profile.png";
import postContext from "../../context/post/postContext";

const Profile = () => {
  const context = useContext(postContext);

  const { getUserPost } = context;

  return (
    <div className="mx-auto h-full w-[70%]">
      <div className="flex h-full w-full flex-col gap-2 rounded-lg bg-white p-4 shadow-primary">
        <div className="img_name_and_stat_count flex h-fit w-full flex-col items-center gap-4 md:h-44 md:flex-row md:justify-evenly">
          <div className="order-1 md:order-2">
            <img
              className="h-32 w-32 rounded-full object-cover"
              src={profileImage}
              alt="PROFILE_IMAGE"
            />
          </div>
          <div className="order-2 flex flex-col items-center gap-3 md:order-3">
            <p className="block text-2.5xl font-semibold md:hidden">bot</p>
            <div className="my-1 mb-2 flex h-full w-full flex-col items-center gap-5 sm:flex-row md:flex-col md:gap-3">
              <button className="w-36 rounded-md bg-primary-gray-200 py-1 font-semibold text-black">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="order-3 flex gap-12 md:order-1">
            <div className="flex flex-col items-center">
              <p className="font-bold text-gray-700">0</p>
              <p className="font-normal text-gray-400">Post</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-gray-700">0</p>
              <p className="font-normal text-gray-400">Follows</p>
            </div>
          </div>
        </div>
        <div className="name_and_bio flex h-fit w-full flex-col items-center gap-2 px-10 py-2">
          <p className="relative hidden w-full text-center text-2.5xl font-semibold md:block">
            bot
          </p>
          <p className=""></p>
        </div>
        <div className="posts_or_saved flex h-fit w-full flex-row items-center justify-between border-y-2 border-gray-200">
          <div className="h-full w-full border-r-2 border-gray-200 py-2 text-center font-semibold">
            Posts
          </div>
          <div className="h-full w-full py-2 text-center font-semibold">
            Liked Posts
          </div>
        </div>
        <div className="show_post_or_saved grid h-fit w-full grid-flow-row grid-cols-3 items-start justify-around gap-2 px-3 py-3"></div>
        <div className="w-full py-12 text-center text-lg font-semibold">
          No Posts Yet
        </div>
      </div>
    </div>
  );
};

// const Profile = () => {
//   return (
//     <div className="flex justify-center items-center h-1/2 w-full">
//       <h2 className="text-red-500 text-5xl">Coming Soon</h2>
//     </div>
//   );
// };

export default Profile;
