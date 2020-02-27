import React from "react";
import StaffMember from './StaffMember';

var marketStaff = [  
  {  
     name: "Andy",
     picture: "Lents International",
     description: "Lorem ipsum dolor, sit amet consectetur adipisicing el"
  },
  {  
    name: "Andy",
    picture: "Lents International",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing el"
  },
  {  
    name: "Andy",
    picture: "Lents International",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing el"
  }
];

function AboutUs(){
  return (
    <div>
      <h1>About Us</h1>
      <hr />
      { marketStaff.map((staffMember, index) =>
        <StaffMember name={staffMember.name}
          description={staffMember.description}
          pictureURL={staffMember.pictureURL} />
        )}
    </div>
  );
}

export default AboutUs;