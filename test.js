const functionality = require('./functionality.js')
 
test('_getPackages should return all the products', () => {
    expect(functionality._getProducts()).toBe([
        {
          id: 'OLJCESPC7Z',
          name: 'Sunglasses',
          description: 'Add a modern touch to your outfits with these sleek aviator sunglasses.',
          picture: '/static/img/products/sunglasses.jpg',
          priceUsd: { currencyCode: 'USD', units: 19, nanos: 990000000 },
          categories: [ 'accessories' ]
        },
        {
          id: '66VCHSJNUP',
          name: 'Tank Top',
          description: 'Perfectly cropped cotton tank, with a scooped neckline.',
          picture: '/static/img/products/tank-top.jpg',
          priceUsd: { currencyCode: 'USD', units: 18, nanos: 990000000 },
          categories: [ 'clothing', 'tops' ]
        },
        {
          id: '1YMWWN1N4O',
          name: 'Watch',
          description: 'This gold-tone stainless steel watch will work with most of your outfits.',
          picture: '/static/img/products/watch.jpg',
          priceUsd: { currencyCode: 'USD', units: 109, nanos: 990000000 },
          categories: [ 'accessories' ]
        },
        {
          id: 'L9ECAV7KIM',
          name: 'Loafers',
          description: 'A neat addition to your summer wardrobe.',
          picture: '/static/img/products/loafers.jpg',
          priceUsd: { currencyCode: 'USD', units: 89, nanos: 990000000 },
          categories: [ 'footwear' ]
        },
        {
          id: '2ZYFJ3GM2N',
          name: 'Hairdryer',
          description: "This lightweight hairdryer has 3 heat and speed settings. It's perfect for travel.",
          picture: '/static/img/products/hairdryer.jpg',
          priceUsd: { currencyCode: 'USD', units: 24, nanos: 990000000 },
          categories: [ 'hair', 'beauty' ]
        },
        {
          id: '0PUK6V6EV0',
          name: 'Candle Holder',
          description: 'This small but intricate candle holder is an excellent gift.',
          picture: '/static/img/products/candle-holder.jpg',
          priceUsd: { currencyCode: 'USD', units: 18, nanos: 990000000 },
          categories: [ 'decor', 'home' ]
        },
        {
          id: 'LS4PSXUNUM',
          name: 'Salt & Pepper Shakers',
          description: 'Add some flavor to your kitchen.',
          picture: '/static/img/products/salt-and-pepper-shakers.jpg',
          priceUsd: { currencyCode: 'USD', units: 18, nanos: 490000000 },
          categories: [ 'kitchen' ]
        },
        {
          id: '9SIQT8TOJO',
          name: 'Bamboo Glass Jar',
          description: 'This bamboo glass jar can hold 57 oz (1.7 l) and is perfect for any kitchen.',
          picture: '/static/img/products/bamboo-glass-jar.jpg',
          priceUsd: { currencyCode: 'USD', units: 5, nanos: 490000000 },
          categories: [ 'kitchen' ]
        },
        {
          id: '6E92ZMYYFZ',
          name: 'Mug',
          description: 'A simple mug with a mustard interior.',
          picture: '/static/img/products/mug.jpg',
          priceUsd: { currencyCode: 'USD', units: 8, nanos: 990000000 },
          categories: [ 'kitchen' ]
        }
      ]
      [
        {
          id: 'OLJCESPC7Z',
          name: 'Sunglasses',
          description: 'Add a modern touch to your outfits with these sleek aviator sunglasses.',
          picture: '/static/img/products/sunglasses.jpg',
          priceUsd: { currencyCode: 'USD', units: 19, nanos: 990000000 },
          categories: [ 'accessories' ]
        },
        {
          id: '66VCHSJNUP',
          name: 'Tank Top',
          description: 'Perfectly cropped cotton tank, with a scooped neckline.',
          picture: '/static/img/products/tank-top.jpg',
          priceUsd: { currencyCode: 'USD', units: 18, nanos: 990000000 },
          categories: [ 'clothing', 'tops' ]
        },
        {
          id: '1YMWWN1N4O',
          name: 'Watch',
          description: 'This gold-tone stainless steel watch will work with most of your outfits.',
          picture: '/static/img/products/watch.jpg',
          priceUsd: { currencyCode: 'USD', units: 109, nanos: 990000000 },
          categories: [ 'accessories' ]
        },
        {
          id: 'L9ECAV7KIM',
          name: 'Loafers',
          description: 'A neat addition to your summer wardrobe.',
          picture: '/static/img/products/loafers.jpg',
          priceUsd: { currencyCode: 'USD', units: 89, nanos: 990000000 },
          categories: [ 'footwear' ]
        },
        {
          id: '2ZYFJ3GM2N',
          name: 'Hairdryer',
          description: "This lightweight hairdryer has 3 heat and speed settings. It's perfect for travel.",
          picture: '/static/img/products/hairdryer.jpg',
          priceUsd: { currencyCode: 'USD', units: 24, nanos: 990000000 },
          categories: [ 'hair', 'beauty' ]
        },
        {
          id: '0PUK6V6EV0',
          name: 'Candle Holder',
          description: 'This small but intricate candle holder is an excellent gift.',
          picture: '/static/img/products/candle-holder.jpg',
          priceUsd: { currencyCode: 'USD', units: 18, nanos: 990000000 },
          categories: [ 'decor', 'home' ]
        },
        {
          id: 'LS4PSXUNUM',
          name: 'Salt & Pepper Shakers',
          description: 'Add some flavor to your kitchen.',
          picture: '/static/img/products/salt-and-pepper-shakers.jpg',
          priceUsd: { currencyCode: 'USD', units: 18, nanos: 490000000 },
          categories: [ 'kitchen' ]
        },
        {
          id: '9SIQT8TOJO',
          name: 'Bamboo Glass Jar',
          description: 'This bamboo glass jar can hold 57 oz (1.7 l) and is perfect for any kitchen.',
          picture: '/static/img/products/bamboo-glass-jar.jpg',
          priceUsd: { currencyCode: 'USD', units: 5, nanos: 490000000 },
          categories: [ 'kitchen' ]
        },
        {
          id: '6E92ZMYYFZ',
          name: 'Mug',
          description: 'A simple mug with a mustard interior.',
          picture: '/static/img/products/mug.jpg',
          priceUsd: { currencyCode: 'USD', units: 8, nanos: 990000000 },
          categories: [ 'kitchen' ]
        }
      ]);
  });
  test('getSupportedCategories should return all the categories', () => {
    expect(functionality.getSupportedCategories()).toStrictEqual([
        'accessories', 'clothing',
        'tops',        'footwear',
        'hair',        'beauty',
        'decor',       'home',
        'kitchen'
      ])})

// test('Filter should return all the products with the category', () => {
//     expect(functionality.filter({request : {filter_code: 'kitchen'}},)).toStrictEqual([
//         {
//           id: 'LS4PSXUNUM',
//           name: 'Salt & Pepper Shakers',
//           description: 'Add some flavor to your kitchen.',
//           picture: '/static/img/products/salt-and-pepper-shakers.jpg',
//           priceUsd: { currencyCode: 'USD', units: 18, nanos: 490000000 },
//           categories: [ 'kitchen' ]
//         },
//         {
//           id: '9SIQT8TOJO',
//           name: 'Bamboo Glass Jar',
//           description: 'This bamboo glass jar can hold 57 oz (1.7 l) and is perfect for any kitchen.',
//           picture: '/static/img/products/bamboo-glass-jar.jpg',
//           priceUsd: { currencyCode: 'USD', units: 5, nanos: 490000000 },
//           categories: [ 'kitchen' ]
//         },
//         {
//           id: '6E92ZMYYFZ',
//           name: 'Mug',
//           description: 'A simple mug with a mustard interior.',
//           picture: '/static/img/products/mug.jpg',
//           priceUsd: { currencyCode: 'USD', units: 8, nanos: 990000000 },
//           categories: [ 'kitchen' ]
//         }
//       ])})