import React from "react";
import SignInButton from "../_components/SignInButton";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10 mt-10 items-center  h-96 items-center justify-center ">
        <h2 className="md:text-3xl text-2xl  font-semibold text-center">
          Login / Signup with your Google account to answer questions!
        </h2>
        <SignInButton />
      </div>
      <Footer />
    </>
  );
}
