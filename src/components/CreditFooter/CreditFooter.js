//component to show credits
import React from "react";
import "./CreditFooter.css";
export default function CreditFooter() {
  return (
    <div className="CreditFooter">
      <div className="creditContents">
        <p>
          Developed by{" "}
          <a href="https://myankpraksh.me" target="_blank" rel="noreferrer">
            Mayank Prakash
          </a>
        </p>
        <p>Designed by Pratik Raj</p>
      </div>
    </div>
  );
}
