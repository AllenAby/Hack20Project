import React, { useEffect, useState } from 'react'
import CompanyCard from './components/CompanyCard'
import Grid from '@material-ui/core/Grid'

// function App() {
//   return <CompanyCard />
// }

// export default App

function App(): JSX.Element {
  const [companiesData, setCompaniesData] = useState<any[]>([]);

  useEffect(() => {
    // const result = fetch('https://api.airtable.com/v0/appyOq7f3eNJZck84/Companies?api_key=keyCISDxj8vRFA7gY');
    fetch('https://api.airtable.com/v0/appyOq7f3eNJZck84/Companies?api_key=keyCISDxj8vRFA7gY')
      // console.log(result);
      // console.log(JSON.stringify(result));
      // const json = result.then(result.json());
      // console.log(json);
      // console.log(json.records);
      // setCompaniesData(json.records);
      .then(res => res.json())
      .then(res => {
        console.log(res)
        //console.log(res.records)
        setCompaniesData(res.records)
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <Grid container direction='row' spacing={2}>
      {companiesData.map(company => (
        <CompanyCard companiesData={companiesData} />
      ))}
    </Grid>
  );
}


// class App extends React.Component {
//   constructor(props: React.Component) {
//     super(props);
//     this.state = {
//       companiesData: any[]
//     }
//   }

//   componentDidMount() {
//     fetch('https://api.airtable.com/v0/appyOq7f3eNJZck84/Companies?api_key=keyCISDxj8vRFA7gY')
//       .then(res => res.json())
//       .then(res => {
//         console.log(res.records)
//         this.setState({ companiesData: res.records })
//       })
//       .catch(error => console.log(error))
//   }

//   render() {
//     const { companiesData } = this.state
//     return (
//       <Grid container direction='row' spacing={2}>
//         {companiesData.map(company => (
//           <CompanyCard {...company.fields} key={company.fields.id} />
//         ))}
//       </Grid>
//     )
//   }
// }

export default App