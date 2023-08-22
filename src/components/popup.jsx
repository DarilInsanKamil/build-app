import Link from "next/link";
import React from "react";

export const PopUp = () => {
  return (
    <div style={{position: 'absolute', zIndex: '99'}}>
      <p>Login terlebih dahulu jika ingin menggunakan fitur ini</p>
      <button>
        <Link href="/Login">Login</Link>
      </button>
      <button>Lain Kali</button>
    </div>
  );
};
