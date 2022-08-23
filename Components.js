import React from "react";

export const InputComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.type === "text" ? "column" : "row",
        padding: "20px",borderRadius:"30px",
      }}
    >
      {props.type === "radio" && <input {...props}></input>}
      <TextComponent
        label={props.label}
        CustomTag={props.type === "text" ? "div" : "span"}
      />
      {props.type === "text" && <input {...props}></input>}
    </div>
  );
};

export const TextComponent = ({
  label,
  styleProps,
  isMandatory,
  children,
  CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {isMandatory && <span>*</span>}
    {children}
  </CustomTag>
);

export const Box = (props) => (
  <>
    <TextComponent label={props.header} />
    <div style={{ border: "1px solid grey",padding:"13px",borderRadius:"10px",marginTop:"22px",backgroundColor:"#F9F9F9" }}>{props.children}</div>
  </>
);
export const DatePick = () => {
  return (
    <div>
      <label>
        {
          <TextComponent
            label="DOB-(DD/MM/YY)"
            isMandatory="true"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: "700",
              margin:"20px"
            }}
          />
        }
      </label>
      <input type="date" name="DOB" />
    </div>
  );
};

export const Dropdown = () => {
  return (
    <div>
      <TextComponent
        label="Education Type"
        isMandatory="true"
        styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: "700", marginBottom:"15px"}}
      />

      <select style={{height:"48px",width:"100%",align:"center"}}>
        <option value="" > --select--</option>
        <option value="">Post Graduate</option>
        <option value=""> Under Graduate</option>
        <option value=""> Diplomo</option>
      </select>
    </div>
  );
};

export const Backlogs = () => {
  return (
    <div>
      <TextComponent
        label="Backlogs"
        isMandatory="true"
        styleProps={{ fontSize: "16px", textAlign: "left", fontWeight: "700",marginBottom:"15px" }}
      />

      <select style={{height:"48px",width:"100%"}}>
        <option value="">no</option>
        <option value="">yes</option>
      </select>
    </div>
  );
};