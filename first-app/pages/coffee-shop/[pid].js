import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CoffeeShop = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(router);
  return (
    <div>
      router id is {pid}
      <Link href={"/"}>go back home😒😒😒</Link>
      <Link href={`/coffee-shop/foo`}>go back dynamic</Link>
    </div>
  );
};

export default CoffeeShop;
