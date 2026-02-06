import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <a href="/">
        <img src="/images/logo.svg" alt="logo" className="w-20" />
      </a>

      <Navbar />
    </header>
  );
}
