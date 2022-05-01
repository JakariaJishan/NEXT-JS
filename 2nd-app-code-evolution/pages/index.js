import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const handleClick =() => {
    console.log('order placced')
    router.replace('/blog')
  }

  return <div>
    <h1>next app</h1>
    <button onClick={handleClick}>place order</button>
  </div>;
}
