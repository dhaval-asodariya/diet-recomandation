// import React, { useState, useEffect } from 'react';
// import { TextField, Box, Container, Typography } from '@mui/material';
// import NutritionTable from './NutritionTable';

// const NutritionData = () => {
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [filters, setFilters] = useState({
//     caloriesMin: 0,
//     caloriesMax: 1000,
//     proteinMin: 0,
//     proteinMax: 100,
//     carbsMin: 0,
//     carbsMax: 100,
//     fatMin: 0,
//     fatMax: 100
//   });

//   useEffect(() => {
//     // Fetch CSV data
//     fetch('/final_Data.csv')
//       .then(response => response.text())
//       .then(csvText => {
//         const rows = csvText.trim().split('\n').map(row => row.split(','));
//         const headers = rows[0];
//         const tableData = rows.slice(1).map(row => {
//           let rowData = {};
//           row.forEach((cell, index) => {
//             rowData[headers[index]] = cell;
//           });
//           return rowData;
//         });
//         setData(tableData);
//       })
//       .catch(error => console.error('Error fetching CSV file:', error));
//   }, []);
// console.log("tableData",data)
//   const handleFilterChange = (e) => {
//     const { id, value } = e.target;
//     setFilters(prevFilters => ({ ...prevFilters, [id]: parseFloat(value) }));
//   };

//   const filteredData = data.filter(row => {
//     const { FoodItem, Calories, Protein, Carbs, Fat } = row;
//     const { caloriesMin, caloriesMax, proteinMin, proteinMax, carbsMin, carbsMax, fatMin, fatMax } = filters;
//     return (
//       FoodItem?.toLowerCase().includes(searchText.toLowerCase()) &&
//       parseFloat(Calories) >= caloriesMin && parseFloat(Calories) <= caloriesMax &&
//       parseFloat(Protein) >= proteinMin && parseFloat(Protein) <= proteinMax &&
//       parseFloat(Carbs) >= carbsMin && parseFloat(Carbs) <= carbsMax &&
//       parseFloat(Fat) >= fatMin && parseFloat(Fat) <= fatMax
//     );
//   });
// console.log("filteredData",filteredData)
// console.log("filters",filters)
// console.log("searchtext",searchText)

//   return (
//     <Container>
//       <Typography variant="h1" align="center">Nutrition Table</Typography>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="searchInput"
//           label="Search by Food Item"
//           variant="outlined"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="caloriesMin"
//           label="Minimum Calories"
//           type="number"
//           value={filters.caloriesMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="caloriesMax"
//           label="Maximum Calories"
//           type="number"
//           value={filters.caloriesMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="proteinMin"
//           label="Minimum Protein (g)"
//           type="number"
//           value={filters.proteinMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="proteinMax"
//           label="Maximum Protein (g)"
//           type="number"
//           value={filters.proteinMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="carbsMin"
//           label="Minimum Carbs (g)"
//           type="number"
//           value={filters.carbsMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="carbsMax"
//           label="Maximum Carbs (g)"
//           type="number"
//           value={filters.carbsMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="fatMin"
//           label="Minimum Fat (g)"
//           type="number"
//           value={filters.fatMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="fatMax"
//           label="Maximum Fat (g)"
//           type="number"
//           value={filters.fatMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box marginTop={4}>
//         <NutritionTable data={filteredData} />
//       </Box>
//     </Container>
//   );
// };

// export default NutritionData;


// import React, { useState, useEffect } from 'react';
// import { TextField, Box, Container, Typography } from '@mui/material';
// import NutritionTable from './NutritionTable';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [filters, setFilters] = useState({
//     caloriesMin: 0,
//     caloriesMax: 1000,
//     proteinMin: 0,
//     proteinMax: 100,
//     carbsMin: 0,
//     carbsMax: 100,
//     fatMin: 0,
//     fatMax: 100
//   });

//   useEffect(() => {
//     // Fetch CSV data
//     fetch('/final_Data.csv')
//       .then(response => response.text())
//       .then(csvText => {
//         const rows = csvText.trim().split('\n').map(row => row.split(','));
//         const headers = rows[0];
//         const tableData = rows.slice(1).map(row => {
//           let rowData = {};
//           row.forEach((cell, index) => {
//             rowData[headers[index]] = cell;
//           });
//           return rowData;
//         });
//         setData(tableData);
//       })
//       .catch(error => console.error('Error fetching CSV file:', error));
//   }, []);

//   const handleFilterChange = (e) => {
//     const { id, value } = e.target;
//     setFilters(prevFilters => ({ ...prevFilters, [id]: parseFloat(value) }));
//   };

//   const filteredData = data.filter(row => {
//     const { 'Food Item': foodItem, Calories, 'Protein (g)': protein, 'Carbs (g)': carbs, 'Fat (g) ': fat } = row;
//     console.log("foodItem",foodItem)
//     const { caloriesMin, caloriesMax, proteinMin, proteinMax, carbsMin, carbsMax, fatMin, fatMax } = filters;
//     return (
//       foodItem.toLowerCase().includes(searchText.toLowerCase()) &&
//       parseFloat(Calories) >= caloriesMin && parseFloat(Calories) <= caloriesMax &&
//       parseFloat(protein) >= proteinMin && parseFloat(protein) <= proteinMax &&
//       parseFloat(carbs) >= carbsMin && parseFloat(carbs) <= carbsMax &&
//       parseFloat(fat) >= fatMin && parseFloat(fat) <= fatMax
//     );
//   });



// const filterData = () => {
//     const filtered = data.filter((item) => {
//         const { 'Food Item': foodItem, Calories, 'Protein (g)': protein, 'Carbs (g)': carbs, 'Fat (g) ': fat } = item;
//     const { caloriesMin, caloriesMax, proteinMin, proteinMax, carbsMin, carbsMax, fatMin, fatMax } = filters;
//       return (
//         item.foodItem.toLowerCase().includes(searchText.toLowerCase()) &&
//         item.calories >= filters.caloriesMin &&
//         item.calories <= filters.caloriesMax &&
//         item.protein >= filters.proteinMin &&
//         item.protein <= filters.proteinMax &&
//         item.carbs >= filters.carbsMin &&
//         item.carbs <= filters.carbsMax &&
//         item.fat >= filters.fatMin &&
//         item.fat <= filters.fatMax
//       );
//     });
//     setFilteredData(filtered);
//   };
//   useEffect(() => {
//     filterData();
//   }, [searchText, filters]);
// console.log("filteredData",filteredData)
//   return (
//     <Container>
//       <Typography variant="h1" align="center">Nutrition Table</Typography>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="searchInput"
//           label="Search by Food Item"
//           variant="outlined"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="caloriesMin"
//           label="Minimum Calories"
//           type="number"
//           value={filters.caloriesMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="caloriesMax"
//           label="Maximum Calories"
//           type="number"
//           value={filters.caloriesMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="proteinMin"
//           label="Minimum Protein (g)"
//           type="number"
//           value={filters.proteinMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="proteinMax"
//           label="Maximum Protein (g)"
//           type="number"
//           value={filters.proteinMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="carbsMin"
//           label="Minimum Carbs (g)"
//           type="number"
//           value={filters.carbsMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="carbsMax"
//           label="Maximum Carbs (g)"
//           type="number"
//           value={filters.carbsMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <TextField
//           id="fatMin"
//           label="Minimum Fat (g)"
//           type="number"
//           value={filters.fatMin}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//         <TextField
//           id="fatMax"
//           label="Maximum Fat (g)"
//           type="number"
//           value={filters.fatMax}
//           onChange={handleFilterChange}
//           margin="normal"
//         />
//       </Box>
//       <Box marginTop={4}>
//         <NutritionTable data={filteredData} />
//       </Box>
//     </Container>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { TextField, Box, Container, Typography } from '@mui/material';
import NutritionTable from './NutritionTable';

const App = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({
    caloriesMin: 0,
    caloriesMax: 1000,
    proteinMin: 0,
    proteinMax: 100,
    carbsMin: 0,
    carbsMax: 100,
    fatMin: 0,
    fatMax: 100
  });

  useEffect(() => {
    // Fetch CSV data
    fetch('/final_Data.csv')
      .then(response => response.text())
      .then(csvText => {
        const rows = csvText.trim().split('\n').map(row => row.split(','));
        const headers = rows[0];
        const tableData = rows.slice(1).map(row => {
          let rowData = {};
          row.forEach((cell, index) => {
            rowData[headers[index].trim()] = cell.trim(); // Trim headers and cell values
          });
          return rowData;
        });
        console.log('Fetched Data:', tableData); // Log the fetched data
        setData(tableData);
      })
      .catch(error => console.error('Error fetching CSV file:', error));
  }, []);

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [id]: parseFloat(value) }));
  };

  const filteredData = data.filter(row => {
    const {
      'Food Item': foodItem,
      Calories,
      'Protein (g)': protein,
      'Carbs (g)': carbs,
      'Fat (g)': fat,
      
    } = row;

    const {
      caloriesMin,
      caloriesMax,
      proteinMin,
      proteinMax,
      carbsMin,
      carbsMax,
      fatMin,
      fatMax
    } = filters;

    console.log('Row:', row); // Log each row
    console.log('Filters:', filters); // Log current filters
    console.log('calories',parseFloat(fat))
    console.log('caloriesmin',parseFloat(fatMin))
    console.log('caloriesmax',parseFloat(fatMax))

    return (
      foodItem.toLowerCase().includes(searchText.toLowerCase()) &&
      parseFloat(Calories) >= caloriesMin && parseFloat(Calories) <= caloriesMax &&
      parseFloat(protein) >= proteinMin && parseFloat(protein) <= proteinMax &&
      parseFloat(carbs) >= carbsMin && parseFloat(carbs) <= carbsMax &&
      parseFloat(fat) >= fatMin && parseFloat(fat) <= fatMax
    );
  });

  console.log('Filtered Data:', filteredData); // Log the filtered data

  return (
    <Box >
      <Typography variant="h1" align="center">Nutrition Table</Typography>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <TextField
        sx={{m:1}}
          id="searchInput"
          label="Search by Food Item"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Box>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <TextField
        sx={{m:1}}
          id="caloriesMin"
          label="Minimum Calories"
          type="number"
          value={filters.caloriesMin}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
        sx={{m:1}}
          id="caloriesMax"
          label="Maximum Calories"
          type="number"
          value={filters.caloriesMax}
          onChange={handleFilterChange}
          margin="normal"
        />
      </Box>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <TextField
        sx={{m:1}}
          id="proteinMin"
          label="Minimum Protein (g)"
          type="number"
          value={filters.proteinMin}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
        sx={{m:1}}
          id="proteinMax"
          label="Maximum Protein (g)"
          type="number"
          value={filters.proteinMax}
          onChange={handleFilterChange}
          margin="normal"
        />
      </Box>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <TextField
        sx={{m:1}}
          id="carbsMin"
          label="Minimum Carbs (g)"
          type="number"
          value={filters.carbsMin}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
        sx={{m:1}}
          id="carbsMax"
          label="Maximum Carbs (g)"
          type="number"
          value={filters.carbsMax}
          onChange={handleFilterChange}
          margin="normal"
        />
      </Box>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <TextField
        sx={{m:1}}
          id="fatMin"
          label="Minimum Fat (g)"
          type="number"
          value={filters.fatMin}
          onChange={handleFilterChange}
          margin="normal"
        />
        <TextField
        sx={{m:1}}
          id="fatMax"
          label="Maximum Fat (g)"
          type="number"
          value={filters.fatMax}
          onChange={handleFilterChange}
          margin="normal"
        />
      </Box>
      <Box marginTop={4}>
        <NutritionTable data={filteredData} />
      </Box>
    </Box>
  );
};

export default App;


