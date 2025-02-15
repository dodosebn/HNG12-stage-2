"use client";
import React, { useState } from "react";
import LayoutCont from "./customs/layoutCont";
import UpPagesInfo from "./customs/upPagesInfo";
import { TiWeatherStormy } from "react-icons/ti";
import ButtonCtrl from "./customs/buttonCtrl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "./customs/loading";

const AttendieDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextClick = () => {
    if (!name.trim()) {
      setErr("Enter Name");
      return;
    }
    if (!email.trim()) {
      setErr("Enter Email");
      return;
    }
    if (!specialRequest.trim()) {
      setErr("Enter Special Request");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErr("Please enter a valid email address");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("specialRequest", specialRequest);
    localStorage.setItem("imageUrl", imageUrl);
    router.push("/page-three");
  };

  const handleReturnClicks = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("specialRequest");
    localStorage.removeItem("imageUrl");
    router.push("/");
  };

  return (
    <LayoutCont>
      <UpPagesInfo pgName="Attendee Details" pgNum="2" />
      <section className="text-[#fafafa] bg-[#08252B] border-[1px] border-[#0E464F] p-2 rounded-xl w-full mt-4 flex flex-col justify-center items-center relative pb-[2rem] px-[0.5rem]">
        <p className="text-left self-start mb-[2rem] text-sm">
          Upload Profile Photo
        </p>
        <div className="bg-[#000000] px-[11rem] py-[3.5rem] rounded-sm flex justify-center items-center relative">
          <div className="bg-[#0E464F] border-[2px] border-[#24A0B5] p-4 text-center rounded-2xl w-[9rem] shadow-lg absolute top-[-2rem] left-1/2 transform -translate-x-1/2 py-[3rem]">
            <div className="mx-auto flex justify-center">
              <input
                type="file"
                id="fileInput"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                <TiWeatherStormy size={32} />
              </label>
            </div>
            <div className="mx-auto flex justify-center text-[10px] ">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Uploaded Image"
                  width={1000}
                  height={1000}
                />
              ) : (
                <span>Drag & drop or click to upload</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4">
        <hr className="border-[#07373F] w-[100%] border-[1.5px] my-4" />
        <div className="w-full flex justify-center">
          <form className="w-[100%] max-w-[400px] flex flex-col gap-3 text-[#fafafa]">
            <label htmlFor="nameId">
              Enter Your Name
              <input
                type="text"
                value={name}
                id="nameId"
                onChange={(e) => {
                  setName(e.target.value);
                  setErr("");
                }}
                className="bg-[#052228] border border-[#07373F] text-[#fafafa] p-1 rounded-md w-full outline-none"
                style={{ textIndent: "0.5rem" }}
              />
            </label>
            <label htmlFor="emailId">
              Enter Your Email
              <input
                type="email"
                value={email}
                id="emailId"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErr("");
                }}
                className="bg-[#052228] border border-[#07373F] text-[#fafafa] p-1 rounded-md w-full outline-none"
                style={{ textIndent: "0.5rem" }}
              />
            </label>
            <label htmlFor="tctArea">
              Special Request?
              <textarea
                value={specialRequest}
                onChange={(e) => {
                  setSpecialRequest(e.target.value);
                  setErr("");
                }}
                id="tctArea"
                className="bg-[#052228] border border-[#07373F] text-[#fafafa] p-1 rounded-md w-full outline-none"
                style={{ textIndent: "0.5rem" }}
              />
            </label>
            {err && <span className="bg-red-600 p-1 rounded">{err}</span>}
          </form>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-between mt-6 gap-[1rem]">
        <ButtonCtrl
          btnName="Back"
          bgCol="#041E23"
          color="#24A0B5"
          handleClicks={handleReturnClicks}
        />
        {loading ? (
          <Loading />
        ) : (
          <ButtonCtrl
            btnName="Get My Free Ticket"
            bgCol="#24A0B5"
            color="#fff"
            handleClicks={handleNextClick}
          />
        )}
      </div>
    </LayoutCont>
  );
};

export default AttendieDetails;
