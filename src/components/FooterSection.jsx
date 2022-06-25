import React from "react";

function FooterSection({ head, content }) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            {head}
          </th>
        </tr>
      </thead>

      <tbody>
        {content.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                {item.title}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FooterSection;
