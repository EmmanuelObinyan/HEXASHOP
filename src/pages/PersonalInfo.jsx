import React from "react";
import { useState, useEffect } from "react";
import men1 from "../assets/men1.png";
import { FcAbout } from "react-icons/fc";
import { FcFaq } from "react-icons/fc";
import Footer from "../components/Footer";
import { MdContactPhone } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { useTheme } from "../config/ThemeContext";
import { CgProfile } from "react-icons/cg";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import LoadingComp from "../components/LoadingComp";
import { db } from "../config/Firebase";
import { getAuth } from "firebase/auth";
import { setDoc, doc, onSnapshot, getDoc } from "firebase/firestore";
import PersonalForm from "../components/PersonalForm";
const PersonalInfo = () => {
  const { dark } = useTheme();
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState({
    fullname: "",
    number: "",
    country: "",
    state: "",
  });
  const [profile, setProfile] = useState(null);
  const handleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };
  const handleRead = (e) => {
    setFile(e.target.file[0]);
  };
  // to read image from the input
  const auth = getAuth();
  const user = auth.currentUser;

  
  // the function for the profile
  const handleSubmit = async () => {
    let isValid = true;
    if (User.fullname.length > 19) {
      isValid = false;
      toast.error("character shouldnt be more than 19 characters", {
        style: {
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "gray",
        },
      });
    }
    if (User.number.length < 11) {
      isValid = false;
      toast.error("number should be 11 digits", {
        style: {
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "gray",
        },
      });
    }
    if (isValid) {
      if (!user) {
        toast.error("sign in to update profile", {
          style: {
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "gray",
          },
        });;
      setTimeout(()=>{
        setUser({ ...User, fullname: "", country: "", state: "", number: "" });
      },2000) 
       return; 
      }
      try {
        await setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            name: User.fullname,
            country: User.country,
            state: User.state,
            phone_number: User.number,
          },
          { merge: true }
        );
        toast.success("profile updated", {
          style: {
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "gray",
          },
        });
        setTimeout(()=>{
        setUser({ ...User, fullname: "", country: "", state: "", number: "" });
      },2000)
      } catch (error) {
        console.log(error);
        setTimeout(()=>{
        setUser({ ...User, fullname: "", country: "", state: "", number: "" });
      },2000)
      }
      
    }
  };
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const fetchProfile = async () => {
      try {
        const ref = doc(db, "users", user.uid);
        const snapShot = await getDoc(ref);
        if (snapShot.exists()) {
          setProfile(snapShot.data());
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        console.log(error);
      } 
    };
    fetchProfile();
  
  }, [user?.uid]);


  return (
    <>
      <Toaster />
      {loading ? <LoadingComp /> : ""}
      <div
        className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 transition-all ease-in-out duration-300 ${
              dark ? "bg-[#1A1D29] text-white" : "bg-[white] text-gray-700"
            } `}
      >
        <h2
          className="mt-8
           text-left
           lg:ml-[20%]
           md:ml-[15%]
           sm:ml-[13%]
           xs:ml-[9%]
           uppercase pb-3 
           font-bold
          xs:text-md
            sm:text-xl
            lg:text-2xl
          "
        >
          personal information
        </h2>
        <p className="capitalize font-semibold mt-2 w-fit xs:ml-[9%] sm:ml-[13%] md:ml-[15%] lg:ml-[20%]  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 ">
          update/save your personal information
        </p>
        {/* for the section */}
        <section className="flex mt-2 h-fit">
          <div className="xs:w-[30%] sm:w-[30%] md:w-[20%] sm:h-[35rem] md:h-[40rem] lg:h-[45rem]">
            <Link
              className="capitalize  block font-semibold my-10 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
              to={"/settingspage"}
            >
              back to settings
            </Link>
            <Link
              className="capitalize flex items-center font-semibold my-10 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
              to={"*"}
            >
              <FiHelpCircle className="w-fit  xs:h-5 md:h-6 lg:h-8 mr-1" />
              help
            </Link>
            <Link
              className="capitalize flex items-center font-semibold my-10 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
              to={"/aboutpage"}
            >
              <FcAbout className="w-fit xs:h-5 md:h-6 lg:h-8 mr-1" />
              about us
            </Link>

            <Link
              className="capitalize flex items-center font-semibold my-10 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
              to={"/contactpage"}
            >
              <MdContactPhone className="w-fit xs:h-5  md:h-6 lg:h-8 mr-1" />
              contact & services
            </Link>
            <Link
              className="capitalize flex items-center font-semibold my-10 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
              to={"/faqpage"}
            >
              <FcFaq className="w-fit xs:h-6  lg:h-8 mr-1" />
              frequently asked question
            </Link>
          </div>

          {/* for the second section */}
          <aside className="sm:w-[80%] md:w-[100%] ml-1 flex lg:justify-between md:h-[45rem] xs:flex-col md:flex-row">
            {/* inner wrapper first */}
          
            { profile ? (
            <div
              className={`xs:mx-auto md:mx-0 xs:w-[95%] sm:w-[80%] md:w-[50%] lg:w-[35%] xs:mb-2 md:mb-0 ${
                dark ? "bg-[#1A1D28]" : "bg-gray-50"
              }`}
            >
              
              <p className="capitalize font-semibold my-5 w-fit mx-auto  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200">
                account profile
              </p>
              {/* profile image*/}
              <figure className="xs:w-[25%] sm:w-[25%] md:w-[30%] lg:w-[25%] flex items-center justify-center relative mx-auto rounded-[100%] border-1 border-gray-400 xs:h-[12%] sm:h-[20%] md:h-[14%] lg:h-[18%]">
                 <img src={user?.photoURL}
                  className={` 
                  xs:w-[70%]  sm:w-[75%] md:w-[60%] lg:w-[65%] xs:h-[70%] sm:h-[65%] md:h-[60%] lg:h-fit border-0 object-cover`}
                 alt="" /> 
                
                <input
                  type="file"
                  onChange={handleRead}
                  className={`border-1 border-gray-300 absolute xs:text-xs lg:text-sm xs:w-[100%] sm:w-[80%] md:w-[90%] px-1 md:h-[20%]  bottom-0 xs:-right-10 sm:-right-10 md:-right-15 lg:-right-20 z-3 transition-all ease duration-200 ${
                    dark ? "bg-[#1A1D23]" : "bg-gray-50"
                  }`}
                />
              </figure>
              {/* for the full name */}
              <div className="justify-self-center my-6  flex xs:w-[100%] lg:w-[80%] xs:justify-around lg:justify-between">
                <p className="capitalize font-semibold  w-fit   xs:text-xs sm:text-md  lg:text-lg transition-all ease duration-200">
                  name
                </p>
                <p className="capitalize font-medium  w-fit   xs:text-xs sm:text-md lg:text-[1rem] transition-all ease duration-200">
                  {profile?.name}
                </p>
              </div>
              {/* for the email */}
              <div className="my-10 justify-self-center flex xs:w-[100%] lg:w-[85%] xs:justify-around lg:justify-between xs:flex-col sm:flex-row">
                <p className="capitalize font-semibold  w-fit   xs:text-xs sm:text-md lg:text-lg xs:mx-auto sm:mx-0 transition-all ease duration-200">
                  email
                </p>
                <p className="capitalize font-medium  w-fit   xs:text-xs sm:text-md lg:text-[1rem] xs:mx-auto sm:mx-0 transition-all ease duration-200">
                  {profile?.email}
                </p>
              </div>
              {/* for the phone number */}
              <div className="my-10 justify-self-center flex  xs:w-[100%] lg:w-[80%] xs:justify-around lg:justify-between">
                <p className="capitalize font-semibold  w-fit   xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200">
                  phone number
                </p>
                <p className="capitalize font-medium w-fit   xs:text-xs sm:text-md lg:lg:text-[1rem] transition-all ease duration-200">
                  {profile?.phone_number}
                </p>
              </div>
              {/* for the country */}
              <div className="my-10 justify-self-center flex xs:w-[100%] lg:w-[80%] xs:justify-around lg:justify-between">
                <p className="capitalize font-semibold  w-fit   xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200">
                  country
                </p>
                <p className="capitalize font-medium w-fit   xs:text-xs sm:text-md lg:lg:text-[1rem] transition-all ease duration-200">
                    {profile?.country}
                </p>
              </div>
              {/* for state */}
              <div className="my-10 justify-self-center flex m xs:w-[100%] lg:w-[80%] xs:justify-around lg:justify-between">
                <p className="capitalize font-semibold  w-fit   xs:text-xs sm:text-md  lg:text-lg transition-all ease duration-200">
                  state
                </p>
                <p className="capitalize font-medium w-fit   xs:text-xs sm:text-md lg:lg:text-[1rem] transition-all ease duration-200">
                  {profile?.state}
                </p>
              </div>
            </div>):(
              <div  className={` flex items-center justify-center xs:mx-auto md:mx-0 xs:w-[95%] sm:w-[80%] md:w-[50%] lg:w-[35%] xs:mb-2 md:mb-0 md:h-[40rem] ${
                dark ? "bg-[#1A1D28]" : "bg-gray-50"
              }`}>
                 <p className="capitalize font-semibold  w-fit mx-auto  xs:text-sm sm:text-lg lg:text-lxl transition-all ease duration-200">
                no profile
              </p> 
              </div>
            )
               }
            {/* inner wrapper second */}
            <div>
            
              <PersonalForm
                data={User}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                headText={"edit account info"}
                show={true}
              />
            </div>
          </aside>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default PersonalInfo;
