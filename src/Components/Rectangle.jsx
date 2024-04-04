import ListCrew from "./ListCrew";
import  "./Rectangle.css";
export default function Rectangle() {
  return (
    <>
      <div className="rectangle">
        <img src="/HeartPeople.png" className="HP" />
        <h3 className="font-titan-one">About us</h3>

        <p className="font">
          We are six computer science students who aimed to built a web-site
          accessible to all book lovers out there. As our second year project,
          our goals were <b>simplicity</b>, <b>efficiency</b> and{" "}
          <b>inclusivity</b>. all the while keeping an aesthetically pleasing
          theme where everyone can find their peace of mind while grabbing a
          book to page. We thank you greatly for being an important part of this
          project in hopes to see more works done by our wonderful team.
        </p>

        <div className="crew">
          <h3 className="font-titan-one3">Crew</h3>
          <ListCrew />
        </div>
        <div className="contact">
          <h3 className="font-titan-one2">Contact us</h3>
          <p className="font-mail">
            <a
              href={`mailto:fikalibrary24@gmail.com?subject=${encodeURIComponent(
                "Feedback or Inquiry"
              )}`}
            >
              fikalibrary24@gmail.com
            </a>
          </p>
          <img src="/EmailLetter.png" className="EL1" />
          <img src="/EmailLetter2.png" className="EL2" />
        </div>
      </div>
    </>
  );
}
