import React from "react";
import StaffMember from './StaffMember';

var marketStaff = [  
  {  
     name: "Andy",
     description: "Lorem ipsum dolor, sit amet consectetur adipisicing el",
     picture: "../assets/images/andy.jpg"
  },
  {  
    name: "Bobby",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing el",
     picture: "../assets/images/bobby.jpg"
  },
  {  
    name: "Cody",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing el",
     picture: "../assets/images/cody.jpg"
  }
];

function AboutUs(){
  return (
    <div>
      <h1>About Us</h1>
      <hr />
      { marketStaff.map((staffMember, index) =>
        <StaffMember name = {staffMember.name}
          description = {staffMember.description}
          pictureURL = {staffMember.pictureURL}
          key = {index} />
        )}
    </div>
  );
}

export default AboutUs;