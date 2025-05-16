'use client';

import { headerLinks } from "@/data/header-content";
import HeaderLink from "./header-link";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScolled(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`
      fixed w-full z-50
      transition-all duration-300
      
      ${isScrolled ? 'bg-rock-blue-dark shadow-lg' : 'bg-transparent'}
    `}>
      <div className="container px-4">
        <div className="flex flex-row justify-between">
          {/* Logo */}
          <div className="mr-2 my-4">
            <Link href={"/"}>
              <Image 
                src="/assets/images/LogoGoldLong.png"
                alt="Logo"
                width={200}
                height={200}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center space-x-4 text-white">
            {headerLinks.map((content) => (
              <HeaderLink key={content} linkContent={content} />
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden cursor-pointer"
          >
            {
              isMenuOpen ? (
                <div>CM</div>
              ) : (
                <div>OM</div>
              )
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {
          isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg mt-4 py-4 px-2 absolute left-4 right-4 transition-all duration-300 ease-in-out">
              <div className="flex flex-col space-y-4">
                {headerLinks.map((content) => (
                  <HeaderLink key={content} linkContent={content} />
                ))}
              </div>
            </div>
          )
        } 
      
      </div>
    </header>
  );
}
