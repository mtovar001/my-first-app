function Nav(){

  let navbar = [
    {
      name: "Mildred Tovar",
      value: "Software Engineer",
    },

    {
      name: "About me",
      value: "I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application",
    },

    {
      name: "Contact me",
      value: "Email: sample_john_smith@mail.com | LinkedIn: https://www.linkedin.com/",
    },

  ]

return (
  <>
  <h1>{navbar[0].name}</h1>
  <h3>{navbar[0].value}</h3>
  <div className="h5Style">
    <h5>{navbar[1].name}</h5>
    <hr className="hrStyle"></hr>
    <p>{navbar[1].value}</p>
    </div>
  <div className="h5Style">
    <h5>{navbar[2].name}</h5>
    <hr className="hrStyle"></hr>
    <p>{navbar[2].value}</p>
  </div>
  <button className="buttonStyle">Open Sanbox</button>
  </>
)



}


export default Nav;