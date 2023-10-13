import Link from 'next/link';
import styles from './homepage.module.css';

export default function Home() {
  return (
    <div>
      <h1>
        <Link href="/about"> About </Link>
      </h1>
    </div>
  );
}
