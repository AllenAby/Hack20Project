import React, { useEffect, useState } from 'react'
import CompanyCard from './components/CompanyCard'
import Grid from '@material-ui/core/Grid'

export interface Company {
  companyName: string;
  positions: Position[];
  applicants: Applicant[];
  email: string;
  phone: string;
  startDate: Date;
  endDate: Date;
  application: string;
  meetings: Meeting[];
}

export interface Position {
  name: string;
  description: string;
  experience: string;
  neededBy: Company[];
}

export interface Applicant {
  name: string;
  companies: Company[];
  resume: File;
  meetings: Meeting[];
}

export interface Meeting {
  meetingID: string;
  meetingTime: Date;
  applicant: Applicant;
  company: Company;
}

function App(): JSX.Element {
  const [companiesData, setCompaniesData] = useState<Company[]>([]);

  var Airtable = require('airtable');
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyCISDxj8vRFA7gY'
  });
  var base = Airtable.base('appyOq7f3eNJZck84');

  base('Companies').select({
    view: 'All applicants'
  }).firstPage(function (err: any, records: any) {
    if (err) { console.error(err); return; }
    records.forEach(function (record: any) {
      setCompaniesData((companiesData) => [
        ...companiesData,
        {
          companyName: record.get('companyName'),
          positions: record.get('position'),
          applicants: record.get('applicants'),
          email: record.get('email'),
          phone: record.get('phone'),
          startDate: record.get('startDate'),
          endDate: record.get('endDate'),
          application: record.get('application'),
          meetings: record.get('meetings'),
        },
      ]);
    });
  });

  base('Companies').select({
    // Selecting the first 3 records in All applicants:
    view: "All applicants"
  }).firstPage(function page(records: any, fetchNextPage: any) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record: any) {
      setCompaniesData((companiesData) => [
        ...companiesData,
        {
          companyName: record.get('companyName'),
          positions: record.get('position'),
          applicants: record.get('applicants'),
          email: record.get('email'),
          phone: record.get('phone'),
          startDate: record.get('startDate'),
          endDate: record.get('endDate'),
          application: record.get('application'),
          meetings: record.get('meetings'),
        },
      ])
    });

    console.log(companiesData);

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(err: any) {
    if (err) { console.error(err); return; }
  });

  return (
    <Grid container direction='row' spacing={2}>
      {companiesData.map(company => (
        <CompanyCard companyData={company} key={company.companyName} />
      ))}
    </Grid>
  );
}

export default App