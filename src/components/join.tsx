"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { eoi_url_25 } from "@/data/join-data";

const JoinSection: React.FC = () => {
  return (
    // 🌠 1️⃣  Added `relative`, `overflow-hidden`, and dark fallback color
    <section
      id="join"
      className="relative min-h-screen flex items-center text-white overflow-hidden bg-[#0a1128]"
    >
      {/* 🌌 2️⃣ Background image layer — parallax stars */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-90 animate-star-drift"
        style={{
          backgroundImage: "url('/public/assets/images/hero-images/constellations.jpg'))", // ✅ your JPG here
          backgroundAttachment: "fixed", // parallax effect
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* 🌙 3️⃣ Subtle overlay gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a1128]/40 to-[#1f304f]/70" />

      {/* ✨ 4️⃣ Keep your existing content inside a relative container */}
      <div className="relative container mx-auto px-4 w-full z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Join Our Team</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            ANU Rocketry welcomes students from all disciplines who are passionate about
            aerospace, engineering, and innovation. Join us on our mission to reach new heights!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-blue-800/80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            {/* ^ Added /80 transparency + backdrop-blur for a “glass card” feel */}
            <h3 className="text-2xl font-bold mb-6">Why Join ANU Rocketry?</h3>
            <ul className="space-y-6">
              {[
                {
                  title: "Hands-on Experience",
                  text: "Apply classroom knowledge to real-world aerospace challenges and gain valuable practical skills.",
                },
                {
                  title: "Competitive Edge",
                  text: "Build an impressive portfolio that sets you apart in job applications and graduate school admissions.",
                },
                {
                  title: "Industry Connections",
                  text: "Network with aerospace professionals, companies, and potential employers through our sponsor relationships.",
                },
                {
                  title: "Interdisciplinary Collaboration",
                  text: "Work alongside students from diverse fields including engineering, physics, computer science, business, and more.",
                },
              ].map((item, i) => (
                <li key={i} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-blue-200" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-blue-200">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-blue-700">
              <h4 className="text-xl font-semibold mb-4">Who We&apos;re Looking For</h4>
              <p className="text-blue-200 mb-4">
                We welcome students from all disciplines and experience levels who share our passion
                for aerospace innovation. Whether you&apos;re interested in engineering, computer science,
                business, communications, or any other field, there&apos;s a place for you on our team.
              </p>
              <p className="text-blue-200">
                The most important qualities we look for are enthusiasm, dedication, and a willingness to learn.
              </p>
            </div>
          </div>

          <div className="text-slate-800 p-8 flex flex-col items-center justify-evenly">
            <Image
              className="rounded-xl shadow-xl"
              src={"/assets/images/joinqr.png"}
              alt="join qr code"
              width={500}
              height={500}
            />
            <a
              href={eoi_url_25}
              target="_blank"
              className="px-6 py-3 text-blue-700 bg-white text-xl rounded-lg shadow-xl transition-colors hover:text-blue-800 inline-block font-medium hover:bg-gray-100 mt-16 lg:mt-0"
            >
              Express Interest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
