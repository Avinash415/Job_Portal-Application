import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated, message]);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-500 to-gray-900 p-4 ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        {/* Header Section */}
        <div className="mb-6 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 overflow-hidden">Create Account</h3>
          <p className="text-gray-500">Sign up for a new account</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Role Selection */}
          <div className="relative">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Register As
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Role</option>
              <option value="Employer">Register as an Employer</option>
              <option value="Job Seeker">Register as a Job Seeker</option>
            </select>
            <FaRegUser className="absolute top-10 right-4 text-gray-500" />
          </div>

          {/* Name Input */}
          <div className="relative">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaPencilAlt className="absolute top-10 right-4 text-gray-500" />
          </div>

          {/* Email and Phone Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <MdOutlineMailOutline className="absolute top-10 right-4 text-gray-500" />
            </div>
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="111-222-333"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FaPhoneFlip className="absolute top-10 right-4 text-gray-500" />
            </div>
          </div>

          {/* Address and Password Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FaAddressBook className="absolute top-10 right-4 text-gray-500" />
            </div>
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <RiLock2Fill className="absolute top-10 right-4 text-gray-500" />
            </div>
          </div>

          {role === "Job Seeker" && (
            <>
              {/* Niche Selections */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    First Niche
                  </label>
                  <select
                    value={firstNiche}
                    onChange={(e) => setFirstNiche(e.target.value)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Niche</option>
                    {nichesArray.map((niche, index) => (
                      <option key={index} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                  <MdCategory className="absolute top-10 right-4 text-gray-500" />
                </div>
                <div className="relative">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Second Niche
                  </label>
                  <select
                    value={secondNiche}
                    onChange={(e) => setSecondNiche(e.target.value)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Niche</option>
                    {nichesArray.map((niche, index) => (
                      <option key={index} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                  <MdCategory className="absolute top-10 right-4 text-gray-500" />
                </div>
                <div className="relative">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Third Niche
                  </label>
                  <select
                    value={thirdNiche}
                    onChange={(e) => setThirdNiche(e.target.value)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Niche</option>
                    {nichesArray.map((niche, index) => (
                      <option key={index} value={niche}>
                        {niche}
                      </option>
                    ))}
                  </select>
                  <MdCategory className="absolute top-10 right-4 text-gray-500" />
                </div>
              </div>

              {/* Cover Letter and Resume Upload */}
              <div className="relative mt-6">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Cover Letter
                </label>
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  rows={4}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Write your cover letter..."
                />
              </div>

              <div className="relative mt-6">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Resume
                </label>
                <input
                  type="file"
                  onChange={resumeHandler}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </>
          )}

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Register
          </button>

          {/* Redirect to Login */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 font-semibold hover:underline">
              Login now
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
