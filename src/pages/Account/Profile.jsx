import React, { useContext } from "react";

import profileImage from "../../assets/profile.png";
import postContext from "../../context/post/postContext";
import getFirstName from "../../utils/getFirstname";

const Profile = () => {
  const context = useContext(postContext);
  const { getUserPost, user } = context;

  const posts = [
    { id: 1, title: "Post 1", content: "This is the content of Post 1." },
    { id: 2, title: "Post 2", content: "This is the content of Post 2." },
    { id: 3, title: "Post 3", content: "This is the content of Post 3." },
  ];

  return (
    // <div className="mx-auto h-[60vh] w-[70%]">
    <div className="h-[80vh] w-full grid place-items-center">
      <div className="flex mx-auto h-[60vh] w-[70%] md:w-[40%] flex-col gap-2 rounded-lg bg-white p-4 shadow-primary">
        {/* <div className="flex h-full w-full flex-col gap-2 rounded-lg bg-white p-4 shadow-primary"> */}
        <div className="img_name_and_stat_count flex h-fit w-full flex-col items-center gap-4 md:h-44 md:flex-row md:justify-evenly">
          <div className="order-1 md:order-2">
            <img
              className="h-32 w-32 rounded-full object-cover"
              src={profileImage}
              alt="PROFILE_IMAGE"
            />
          </div>
          <div className="order-2 flex flex-col items-center gap-3 md:order-3">
            <p className="block text-2.5xl font-semibold md:hidden">
              {getFirstName(user.name)}
            </p>
            <div className="my-1 mb-2 flex h-full w-full flex-col items-center gap-5 sm:flex-row md:flex-col md:gap-3">
              <button className="w-36 rounded-md bg-primary-gray-200 py-1 font-semibold text-black">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="order-3 flex gap-12 md:order-1">
            <div className="flex flex-col items-center">
              <p className="font-bold text-gray-700">
                {localStorage.getItem("no_of_post")}
              </p>
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
      </div>
    </div>
  );

  // return (
  //   <div className="min-h-screen bg-gray-100 flex flex-col">
  //     <nav className="bg-gray-800">
  //       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
  //         <div className="relative flex items-center justify-between h-16">
  //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  //             {/* Mobile menu button */}
  //           </div>
  //           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
  //             {/* Logo */}
  //             <div className="hidden sm:block sm:ml-6">
  //               <div className="flex space-x-4">
  //                 <a
  //                   href="/"
  //                   className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Home
  //                 </a>
  //                 <a
  //                   href="/admin"
  //                   className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Admin
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //     <main className="flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <h1 className="text-3xl font-bold mt-8">Admin Dashboard</h1>
  //       {/* Admin content */}
  //     </main>
  //   </div>
  // );
};

// const Profile = () => {
//   return (
//     <div className="flex justify-center items-center h-1/2 w-full">
//       <h2 className="text-red-500 text-5xl">Coming Soon</h2>
//     </div>
//   );
// };

export default Profile;
