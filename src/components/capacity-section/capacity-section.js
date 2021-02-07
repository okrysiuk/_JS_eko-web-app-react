import React from "react";
import "./capacity-section.css";

const CapacitySection = () => {
  return (
    <>
      <strong className="table-title">Capacity tables</strong>
      <div className="table-section">
        <div className="table-section-row">
          <div className="table-card-item">
            <h3>0.2L(0.228 kg)</h3>
            <table className="zero">
              <thead>
              <tr>
                <th>Packaging</th>
                <th>Quantity</th>
                <th>Weight</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>In packaging</td>
                <td>26 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>In pallet</td>
                <td>2646 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  In container 20 `DV
                  <br />
                  (loading without pallets)
                </td>
                <td>55890 pcs/2070 pkg</td>
                <td>12743 kg</td>
              </tr>
              <tr>
                <td>
                  In container 40 `DV
                  <br />
                  (loading without pallets)
                </td>
                <td>102600 pcs/3800 pkg</td>
                <td>23393 kg</td>
              </tr>
              <tr>
                <td>
                  In truck 86 m3 <br />
                  (loading with pallets)
                </td>
                <td>
                  84672 pcs/3136 pkg
                  <br />
                  /32 pallet
                </td>
                <td>20100 kg</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="table-spacer" />
          <div className="table-card-item">
            <h3>1L(1.143 kg)</h3>
            <table className="zero">
              <thead>
              <tr>
                <th>Packaging</th>
                <th>Quantity</th>
                <th>Weight</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>In packaging</td>
                <td>12 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>In pallet</td>
                <td>576 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  In container 20 `DV
                  <br />
                  (loading without pallets)
                </td>
                <td>11700 pcs/975 pkg</td>
                <td>13373 kg</td>
              </tr>
              <tr>
                <td>
                  In container 40 `DV
                  <br />
                  (loading without pallets)
                </td>
                <td>20400 pcs/1700 pkg</td>
                <td>23317 kg</td>
              </tr>
              <tr>
                <td>
                  In truck 86 m3 <br />
                  (loading with pallets)
                </td>
                <td>
                  18432 pcs/1536 pkg
                  <br />
                  /32 pallet
                </td>
                <td>21800 kg</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* --------------------------------------------------*/}
        <div className="table-section-row">
          <div className="table-card-item">
            <h3>1.9L(2 kg)</h3>
            <table className="zero">
              <thead>
              <tr>
                <th>Packaging</th>
                <th>Quantity</th>
                <th>Weight</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>In packaging</td>
                <td>6 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>In pallet</td>
                <td>288 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  In container 20 `DV
                  <br />
                  (loading without pallets)
                </td>
                <td>7650 pcs/1275 pkg</td>
                <td>15300 kg</td>
              </tr>
              <tr>
                <td>
                  In container 40 `DV
                  <br />
                  (loading without pallets)
                </td>
                <td>11700 pcs/1950 pkg</td>
                <td>23400 kg</td>
              </tr>
              <tr>
                <td>
                  In truck 86 m3 <br />
                  (loading with pallets)
                </td>
                <td>
                  9216 pcs/1536 pkg
                  <br />
                  /32 pallet
                </td>
                <td>19000 kg</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="brand-spacer" />
          <div className="table-card-item">
            <h3>3L(4 kg)</h3>
            <table className="zero">
              <thead>
              <tr>
                <th>Packaging</th>
                <th>Quantity</th>
                <th>Weight</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>In packaging</td>
                <td>2 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>In pallet</td>
                <td>200 pieces</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  In truck 86 m3 <br />
                  (loading with pallets)
                </td>
                <td>
                  5000 pcs/2500 pkg
                  <br />
                  /25 pallet
                </td>
                <td>20000 kg</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CapacitySection;
