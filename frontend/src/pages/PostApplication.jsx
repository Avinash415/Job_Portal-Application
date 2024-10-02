import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  clearAllApplicationErrors,
  postApplication,
  resetApplicationSlice,
} from "../store/slices/applicationSlice";
import { toast } from "react-toastify";
import { fetchSingleJob } from "../store/slices/jobSlice";
import { IoMdCash } from "react-icons/io";
import { FaToolbox } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PostApplication = () => {
  const { singleJob } = useSelector((state) => state.jobs);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector(
    (state) => state.applications
  );

  const { jobId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handlePostApplication = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    if (resume) {
      formData.append("resume", resume);
    }
    dispatch(postApplication(formData, jobId));
  };

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
      setCoverLetter(user.coverLetter || "");
      setResume((user.resume && user.resume.url) || "");
    }
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetApplicationSlice());
    }
    dispatch(fetchSingleJob(jobId));
  }, [dispatch, error, message, jobId, user]);

  let qualifications = [];
  let responsibilities = [];
  let offering = [];
  if (singleJob.qualifications) {
    qualifications = singleJob.qualifications.split(". ");
  }
  if (singleJob.responsibilities) {
    responsibilities = singleJob.responsibilities.split(". ");
  }
  if (singleJob.offers) {
    offering = singleJob.offers.split(". ");
  }

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
   <>
  <article className="application_page">
    <form>
      <h3>Application Form</h3>

      <div>
        <label htmlFor="job-title">Job Title</label>
        <input className="bg-slate-300"
          type="text" 
          id="job-title" 
          placeholder={singleJob.title} 
          disabled 
        />
      </div>

      <div>
        <label htmlFor="name">Your Name</label>
        <input className="bg-slate-300"
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div>
        <label htmlFor="email">Your Email</label>
        <input className="bg-slate-300"
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input  className="bg-slate-300"
          type="number" 
          id="phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input className="bg-slate-300"
          type="text" 
          id="address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
        />
      </div>

      {user?.role === "Job Seeker" && (
        <>
          <div>
            <label htmlFor="cover-letter">Cover Letter</label>
            <textarea className="bg-slate-300"
              id="cover-letter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={10}
            />
          </div>

          <div>
            <label htmlFor="resume">Resume</label>
            <input 
              type="file" 
              id="resume" 
              onChange={resumeHandler} 
            />
          </div>
        </>
      )}

      {isAuthenticated && user?.role === "Job Seeker" && (
        <div style={{ alignItems: "flex-end" }}>
          <button 
            className="btn" 
            onClick={handlePostApplication} 
            disabled={loading}
          >
            Apply
          </button>
        </div>
      )}
    </form>

    <div className="job-details">
      <header>
        <h3>{singleJob.title}</h3>
        {singleJob.personalWebsite && (
          <a href={singleJob.personalWebsite.url} target="_blank" rel="noopener noreferrer">
            {singleJob.personalWebsite.title}
          </a>
        )}
        <p>{singleJob.location}</p>
        <p>Rs. {singleJob.salary} a month</p>
      </header>

      <hr />

      <section>
        <div className="wrapper">
          <h3>Job Details</h3>
          <div className="detail-item">
            <IoMdCash />
            <div>
              <span>Pay</span>
              <span>{singleJob.salary} a month</span>
            </div>
          </div>
          <div className="detail-item">
            <FaToolbox />
            <div>
              <span>Job Type</span>
              <span>{singleJob.jobType}</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="wrapper">
          <h3>Location</h3>
          <div className="location-wrapper">
            <FaLocationDot />
            <span>{singleJob.location}</span>
          </div>
        </div>

        <hr />

        <div className="wrapper">
          <h3>Full Job Description</h3>
          <p>{singleJob.introduction}</p>

          {singleJob.qualifications && (
            <div>
              <h4>Qualifications</h4>
              <ul>
                {qualifications.map((qual) => (
                  <li key={qual} style={{ listStyle: "inside" }}>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {singleJob.responsibilities && (
            <div>
              <h4>Responsibilities</h4>
              <ul>
                {responsibilities.map((responsibility) => (
                  <li key={responsibility} style={{ listStyle: "inside" }}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {singleJob.offers && (
            <div>
              <h4>Offering</h4>
              <ul>
                {offering.map((offer) => (
                  <li key={offer} style={{ listStyle: "inside" }}>
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <hr />

      <footer>
        <h3>Job Niche</h3>
        <p>{singleJob.jobNiche}</p>
      </footer>
    </div>
  </article>
</>
  );
};

export default PostApplication;
