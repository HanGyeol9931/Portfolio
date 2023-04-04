import React, { useEffect, useState } from "react";
import {
  ContactContainer,
  ContactCotentsBox,
  ContactCotentsBoxDiv,
  ContactCotentsIconDiv,
  ContactCotentsTitle,
  ContactCotent,
} from "./ContactStyledComponents";

const Contact = () => {
  const [numberBox, setNumberBox] = useState(false);
  const [addressBox, setAddressBox] = useState(false);
  const [gitHubBox, setGitHubBox] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNumberBox(true);
    }, 500);
    setTimeout(() => {
      setAddressBox(true);
    }, 700);
    setTimeout(() => {
      setGitHubBox(true);
    }, 900);
  }, []);
  return (
    <ContactContainer>
      <ContactCotentsBoxDiv>
        <ContactCotentsBox show={numberBox}>
          <ContactCotentsIconDiv show={numberBox}>
            <i class="bi bi-telephone-fill"></i>
          </ContactCotentsIconDiv>
          <ContactCotentsTitle show={numberBox}>
            Contact Number
          </ContactCotentsTitle>
          <ContactCotent show={numberBox}>010-2036-9931</ContactCotent>
        </ContactCotentsBox>
        <ContactCotentsBox show={addressBox}>
          <ContactCotentsIconDiv show={addressBox}>
            <i className="bi bi-send-fill"></i>
          </ContactCotentsIconDiv>
          <ContactCotentsTitle show={addressBox}>
            Email Address
          </ContactCotentsTitle>
          <ContactCotent show={addressBox}>gksruf9939@gmail.com</ContactCotent>
        </ContactCotentsBox>
        <ContactCotentsBox show={gitHubBox}>
          <ContactCotentsIconDiv show={gitHubBox}>
            <i class="bi bi-globe-central-south-asia"></i>
          </ContactCotentsIconDiv>
          <ContactCotentsTitle show={gitHubBox}>GitHub</ContactCotentsTitle>
          <ContactCotent
            show={gitHubBox}
            style={{ cursor: "pointer",color:"#527d59" }}
            onClick={() => {
              window.open("https://github.com/HanGyeol9931");
            }}
          >
            HanGyeol9931 GitHub
          </ContactCotent>
        </ContactCotentsBox>
      </ContactCotentsBoxDiv>
    </ContactContainer>
  );
};

export default Contact;
