// import React, { Component } from "react";
// const axios = require("axios");
//
// class SearchBar extends Component {
//   state = {
//     selectedBorough: "",
//     animals: []
//   };
//
//   getanimals = e => {
//     axios({
//       url: "http://localhost:3000/petfinder/animalquery",
//       method: "post",
//       headers: {},
//       data: {
//         type: e.target.value,
//         organization: this.state.selectedBorough
//       }
//     }).then(animals => {
//       console.log(animals);
//       this.setState({
//         animals: animals.data.data.animals
//       });
//     });
//   };
//
//   handleSelect = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//
//   render() {
//     return (
//       <>
//         <form>
//           {"Select a Borough"}{" "}
//           <select name="selectedBorough" onChange={this.handleSelect}>
//             <option value="NY644,NY818,NY1184,NY557,NY744,NY599,NY123,NY1288,NY679,NY955,NY1360,NY693,NY993,NY1192,NY1438,NY704,NY1312,NY262,NY1043,NY1122,NY161,NY251,NY1115,NY714,NY1400,NY1199,NY1392,NY874,NY864,NY1042,NY139,NY1437,NY20,NY440,NY93,NY1041,NY100,NY488,NY245,NY934,NY1286,NY479,NY606">
//               Manhattan
//             </option>
//             <option value="NY803,NY505,NY1278,NY1367,NY1416,NY1317,NY773,NY1190,NY06,NY1297,NY1424,NY794,NY922,NY1072,NY1073,NY467,NY637,NY729,NY1359,NY1023,NY962,NY1140,NY1408,NY947">
//               Brookyln
//             </option>
//             <option value="NY102,NY178,NY992,NY1156,NY879,NY1422,NY600,NY525,NY1211,NY1045,NY666,NY791,NY887,NY151,NY1425,NY1293,NY1113,NY1414,NY1376,NY408,NY1047,NY1145,NY455,NY1419,NY1271,NY790">
//               Queens
//             </option>
//             <option value="NY587,NY652,NY434,NY517">Bronx</option>
//           </select>
//         </form>
//         <button name="animalChoice" value="dog" onClick={this.getanimals}>
//           Dog
//         </button>
//         <button name="animalChoice" value="cat" onClick={this.getanimals}>
//           Cat
//         </button>
//       </>
//     );
//   }
// }
//
// export default SearchBar;
