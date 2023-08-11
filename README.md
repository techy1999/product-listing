# Apparels Ecommerce Product List Page

## Technology

- Next.js
- Reactjs
- Contentful
- Jest
- Testing library

## How to start

1. Start
   - npm run dev
2. Test
   - npm run test

## Feature

- Fetch all product from contentful and server side rendering by next.js
- Paginated Product
- Filter product based on category
- Customer 404 page
- Custom Loader

## ENV Example

- create .env file

```
CONTENTFUL_SPACE_ID='xxxx'
CONTENTFUL_ACCESS_TOKEN='xxxxx'
CONTENTFUL_ENVIRONMENT_ID='xx'
LIMIT= #page limit

```

## Content Model

1. Product Content Model

   - name : string
   - price : decimal
   - description : rich text
   - images - image
   - category - string

2. Category Content Model - men , women, kid
   Note :- [reference ](https://www.contentful.com/help/content-modelling-basics/)

3. Internalization support
   - English(en)
   - German(de)

### ContentFull API

- npm i content

```

const contentful = require('contentful')

const client = contentful.createClient({
  space: '<space_id>',
  environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: '<content_delivery_api_key>'
})

client.getEntries({
  locale: '<locale_id>'
})
.then((response) => console.log(response.items))
.catch(console.error)


```

[Check for reference](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/localization/retrieve-localized-entries/query-entries/console/js)

## Screenshot

> Desktop

> ![Mobile](https://github.com/techy1999/AutoDeployBackend/assets/116334237/630f2c80-4e17-4230-83fa-c8b9ee9eec6c)

> Mobile

> ![Desktop](https://github.com/techy1999/AutoDeployBackend/assets/116334237/fb8891c9-946c-439b-88a0-477ddf5e6036)
