import React from "react";

function Logo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a href="/">
        <img 
          src="/zorel-logo.png" 
          alt="zorel-logo" 
          style={{ maxWidth: '150px', height: 'auto' }}
        />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
