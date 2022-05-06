import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  const { data: session, status } = useSession();
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn("github");
  };
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/dashboard"}>dashboard</Link>
      <br />
      {session===null && status==='unauthenticated' ? (
        <Link href={"/api/auth/signin"}>
          <a onClick={handleSignIn}>sign in</a>
        </Link>
      ) : (
        <Link href={"/api/auth/signout"}>
          <a onClick={handleSignOut}>sign out</a>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
