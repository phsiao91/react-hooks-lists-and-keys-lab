import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLinks = links.map((linksObj) => {
    return <a key={linksObj} href={`#${linksObj}`}>{linksObj}</a>
  });
  return (
    <nav>
      {newLinks}
    </nav>
  )
}

export default NavBar;
