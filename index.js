import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import {TextComponent,InputComponent,Box,DatePick,Dropdown,Backlogs,} from "./Components";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#8D19FFB2",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
          fontWeight: "700",
          lineHeight: "41px",
        color: "white",
        padding: "48px",
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{
          fontSize: "48px",
        }}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING-2023"
        styleProps={{
          fontSize: "36px",
        }}
      />
    </div>
  );
};

const BulletEntry = () => {
  return (
    <div>
      <TextComponent
        label="Gender"
        styleProps={{
          fontSize: "18px",
          textAlign: "left",
          fontWeight: "700",
          fontsize: "16px",
          lineheight: "18px",
          margin: "37px 15px 10px 20px"

        }}
        isMandatory="true"
      />

      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    </div>
  );
};
const Attatchments = () => {
  return (
    <>
    
      <div>
       
        <TextComponent
          styleProps={{
            fontSize: "18px",
            textAlign: "left",
            fontWeight: "700",
          }}
          label="Resume/CV"
          CustomTag="span"
        >
          <TextComponent
            styleProps={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
            }}
            CustomTag="span"
            label="(Accept format: doc/.docx/.pdf;Size: 1MB)"
          />
        </TextComponent>
      </div>
      <button className="Choose File" style={{borderColor:"#8D19FF",color:"purple",borderRadius:"5px",width: "200px",
        height: "48px",fontWeight: "700",fontSize : "20px",lineHeight: "23px",marginTop:"15px"}}>Choose File</button>
    </>
  );
};

 export const App = () => {
  const [firstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailid, setemailid] = useState("");
  const [contact, setcontact] = useState("");
  const [Female, setFemale] = useState("");
  const [tenth, settenth] = useState("");
  const [twelth, settwelth] = useState("");
  const [degree, setdegree] = useState("");
  const [college, setcollege] = useState("");
  const [Branch, setBranch] = useState("");
  const [reg, setreg] = useState("");
  return (
    <div>
      <Header />
      <form styleProps={{ padding: "72px" }}>
        <TextComponent
          label="*Required"
          styleProps={{
            fontWeight: "400",
            fontSize: "20px",
            lineHeight: "23px",
          }}
        />
        <TextComponent
          label="Registration form"
          styleProps={{
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "55px",
            padding: "30px",
          }}
        />
        <TextComponent
          label="Job Details"
          styleProps={{
            backgroundColor:"",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "28px",
          }}
        />
        <Box style={{ padding: "20px", borderRadius: "10px" ,backgroundColor:"#FFFFFF"}}>
          <InputComponent
            type="text"
            label={
              <TextComponent
                label="Job Profiles"
                isMandatory="true"
                styleProps={{
                  
                  fontWeight: "700",
                  fontSize: "15px",
                  lineHeight: "17px",
                  marginBottom:"10px"
                }}
              ></TextComponent>
            }
            placeholder="Software development"
            style={{padding:"15px",backgroundColor:"#E5E5E5",borderRadius:"5px"}}
            disabled
          />
        </Box>
        <TextComponent
          label="Personal Details"
          isMandatory="true"
          styleProps={{
            marginTop:"10px",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "28px",
          }}
        ></TextComponent>
        <Box style={{ padding: "20px", borderRadius: "10px" ,backgroundColor:"#E5E5E5",boder:"1px solid #8D19FF",filter:"ilter: blur(4px)"}}>
          <InputComponent
            type="text"
            label={
              <TextComponent
                label="First Name:"
                isMandatory="true"
                styleProps={{
                  marginBottom:"13px",
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "700",
                  
                }}
              />
            }
            placeholder="Enter First name"
            style={{padding:"15px"}}
            value={firstName}
            onChange={(a) => {
              console.log(a.target.value);
              setFirstName(a.target.value);
            }}
          />

          <InputComponent
            type="text"
            label={
              <TextComponent
                label="Middle Name:"
                styleProps={{
                  marginBottom:"13px",
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "700",
                }}
              />
            }
            placeholder="Middle Name"
            style={{padding:"15px"}}
            value={MiddleName}
            onChange={(a) => {
              console.log(a.target.value);
              setMiddleName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            label={
              <TextComponent
                label="Last Name:"
                isMandatory="true"
                styleProps={{
                  marginBottom:"13px",
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "700",
                }}
              />
            }
            placeholder="Enter last name"
            style={{padding:"15px"}}
            value={lastName}
            onChange={(a) => {
              console.log(a.target.value);
              setLastName(a.target.value);
            }}
          />

          <InputComponent
            type="text"
            label={
              <TextComponent
                label="Emailid"
                isMandatory="true"
                styleProps={{
                  marginBottom:"13px",
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "700",
                }}
              />
            }
            placeholder="unknown@gmail.com"
            style={{padding:"15px"}}
            value={emailid}
            onChange={(a) => {
              console.log(a.target.value);
              setemailid(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            label={
              <TextComponent
                label="Contact"
                isMandatory="true"
                styleProps={{
                  marginBottom:"13px",
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "700",
                }}
              />
            }
            placeholder="9876543210"
            style={{padding:"15px"}}
            value={contact}
            onChange={(a) => {
              console.log(a.target.value);
              setcontact(a.target.value);
            }}
          />
          <DatePick />

          <BulletEntry InputComponent />
        </Box>
        <h3>Educational Details</h3>
        <Box>
          
          <h4> Lowest education profile</h4>
          <TextComponent
            label="10th percentage%"
            isMandatory="true"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: "700",
            
            }}
          />
          <InputComponent
            type="text"
            value={tenth}
            placeholder="63%"
            style={{padding:"15px"}}
            onChange={(a) => {
              console.log(a.target.value);
              settenth(a.target.value);
            }}
          />
          <TextComponent
            label="12th percentage%"
            isMandatory="true"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: "700",
            }}
          />
          <InputComponent
            type="text"
            value={twelth}
            placeholder="70%"
            style={{padding:"15px"}}
            onChange={(a) => {
              console.log(a.target.value);
              settwelth(a.target.value);
            }}
          />
          <h4>Highest Educational Profile</h4>
          <Box>
            <Dropdown />
            <TextComponent
              label="Degree"
              isMandatory="true"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "700",
                marginTop:"20px"
              }}
            />
            <InputComponent
              type="text"
              value={degree}
              placeholder="BE"
              style={{padding:"15px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setdegree(a.target.value);
              }}
            />
            <TextComponent
              label="College"
              isMandatory="true"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "700",
                height: "10px",
              }}
            />
            <InputComponent
              type="text"
              value={college}
              placeholder="college"
              style={{padding:"15px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setcollege(a.target.value);
              }}
            />
            <TextComponent
              label="Reg"
              isMandatory="true"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "700",
              }}
            />
            <InputComponent
              type="text"
              value={reg}
              placeholder="19TU0000"
              style={{padding:"15px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setreg(a.target.value);
              }}
            />
            <TextComponent
              label="Branch"
              isMandatory="true"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "700",
              }}
            />
            <InputComponent
              type="text"
              value={Branch}
              placeholder="computer science engineering"
              style={{padding:"15px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setBranch(a.target.value);
              }}
            />
            <Backlogs />
          </Box>
        </Box>

       <h3> ATTACHMENTS </h3>
        <Box  style={{fontFamily: "Hind",
fontStyle: "normal",marginTop:"10px",
fontWeight: "700",
fontSize: "18px",
lineHeight: "38px"}}>
        <Attatchments />
        </Box>
        <button className="submit" style={{ backgroundColor: "#8D19FFB2",color:"white",borderRadius:"5px" ,width: "200px",
height: "48px",fontWeight: "700",
fontSize : "20px",
lineHeight: "23px",float:"right",marginTop:"30px"}}>
          SUBMIT 
        </button>
      </form>
    </div>
  );
};
//ReactDOM.render(<App />, document.getElementById("app"));