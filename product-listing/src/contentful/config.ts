// Config client for contentful 

import { createClient } from 'contentful';
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const clientContentful = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!
});


export default clientContentful;