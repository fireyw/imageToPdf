import "./App.css";
import { useRef } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

function App() {
  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        //data는 이미 image
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        console.log(pageWidth, pageHeight);

        doc.addImage(dataUrl, "JPEG", 0, 0, pageWidth, pageHeight);
        // doc.addImage(dataUrl, "JPEG", 0, 0, 533, 672);

        // doc.save("test.pdf");

        window.open(doc.output("bloburl"));
        // console.log("dataUrl:", dataUrl);
        // const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App" ref={elementRef}>
      <table
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          borderCollapse: "collapse",
          // width: "595px",
          // height: "842",
        }}
      >
        <tr>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Company
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Contact
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Country
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Company
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Contact
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Country
          </th>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Alfreds Futterkiste
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Maria Anders
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Germany
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Berglunds snabbköp
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Christina Berglund
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Sweden
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Berglunds snabbköp
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Christina Berglund
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Sweden
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Centro comercial Moctezuma
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Francisco Chang
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Mexico
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Centro comercial Moctezuma
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Francisco Chang
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Mexico
          </td>
        </tr>
      </table>
      <table
        ref={elementRef}
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          borderCollapse: "collapse",
          // width: "595px",
          // height: "842",
        }}
      >
        <tr>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Company
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Contact
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Country
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Company
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Contact
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Country
          </th>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Alfreds Futterkiste
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Maria Anders
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Germany
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Berglunds snabbköp
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Christina Berglund
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Sweden
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Berglunds snabbköp
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Christina Berglund
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Sweden
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Centro comercial Moctezuma
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Francisco Chang
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Mexico
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Centro comercial Moctezuma
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Francisco Chang
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Mexico
          </td>
        </tr>
      </table>
      <table
        ref={elementRef}
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          borderCollapse: "collapse",
          // width: "595px",
          // height: "842",
        }}
      >
        <tr>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Company
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Contact
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Country
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Company
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Contact
          </th>
          <th
            style={{
              backgroundColor: "#04AA6D",
              padding: "12px 8px",
              textAlign: "left",
              border: "1px solid #ddd",
            }}
          >
            Country
          </th>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Alfreds Futterkiste
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Maria Anders
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Germany
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Berglunds snabbköp
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Christina Berglund
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Sweden
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Berglunds snabbköp
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Christina Berglund
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Sweden
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Centro comercial Moctezuma
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Francisco Chang
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Mexico
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Centro comercial Moctezuma
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Francisco Chang
          </td>
          <td
            style={{
              padding: "8px",
              border: "1px solid #ddd",
              textAlign: "left",
            }}
          >
            Mexico
          </td>
        </tr>
      </table>
      <button onClick={htmlToImageConvert}>Download Image</button>
    </div>
  );
}

export default App;
