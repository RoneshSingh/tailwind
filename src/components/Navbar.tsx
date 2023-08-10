import Button from "./Button";

const Navbar = () => {
  function handleHome(): void {
    alert("You are an idiot");
  }

  function handleLogOut(): void {
    alert("You can not log out");
  }

  function handleMemes(): void {
    window.open("https://memes.com/");
  }

  return (
    <nav className="bg-violet-500 rounded-2xl bg-transparent ">
      <p className="flex justify-between">
        <Button name="Home" onClick={handleHome} />
        <Button name="See Memes" onClick={handleMemes} />
        <Button name="Log Out" onClick={handleLogOut} />
      </p>
    </nav>
  );
};

export default Navbar;
