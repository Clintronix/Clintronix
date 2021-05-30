import "./Footer.css";


function Footer() {
  return (
    
    <footer className="footer">
      <div id="contacts">
        <ul>
          <li><a href="tel:4073191523">+1 (407) 319-1523</a></li>
          <li><a href="mailto:clintcregger@aol.com">ClintCregger@AOL.com</a></li>
        </ul>
      </div>
      <div className="left">
        <button id="open-contacts">Contact</button>
      </div>
      <div>
          <img src="https://www.codewars.com/users/Clintronix/badges/micro" alt="kata wars merit" height="35" />
      </div>
      
    </footer>
  );
}

  


export default Footer;
