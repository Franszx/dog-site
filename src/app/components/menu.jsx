import Link from "next/link";

export default function Page() {
  return (
    <nav>
      <Link href="/" prefetch={false}>
        Home
      </Link>
      <Link href="/henry/" prefetch={false}>
        Henry
      </Link>
    </nav>
  );
}
