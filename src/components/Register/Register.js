import Logo from "../../assets/Shapes.jpg";
import "./Register.css";

export default function Register() {
  return (
    <div>
      <div className="mainDiv">
        <h1 className="regClosed">
          Registrations for the 2022-2023 School year are closed!
        </h1>
        <p className="checkBack">Applications will open back up July 2023.</p>
        <img className = "logo" src={Logo}></img>
      </div>
    </div>
  );
}
