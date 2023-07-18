"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className='header sticky'>
        <div className='container'>
          <div className='header_container'>
            <Link className='header_logo' href='/'>
              V.<span>Tonkikh</span>
            </Link>
            <div className='header_nav'>
              <a
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                Главная
              </a>
              <a
                onClick={() =>
                  window.scrollTo({
                    top: 2050,
                    behavior: "smooth",
                  })
                }
              >
                Обо мне
              </a>
              <a
                onClick={() =>
                  window.scrollTo({
                    top: 3450,
                    behavior: "smooth",
                  })
                }
              >
                Портфолио
              </a>
              <a>Резюме</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
