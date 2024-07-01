const fs = require("fs");
const { faker } = require("@faker-js/faker");
const { url } = require("inspector");

const categoriesData = [
  {
    id: 1,
    title: "Computers and Laptops",
    subTitle: "",
    image_Url:
      "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
  },
  {
    id: 2,
    title: "cosmetics and body care",
    subTitle: "",
    image_Url:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
  },
  {
    id: 3,
    title: "Accesories",
    subTitle: "",
    image_Url:
      "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
  },
  {
    id: 4,
    title: "Cloths",
    subTitle: "",
    image_Url:
      "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
  },
  {
    id: 5,
    title: "Shoes",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
  },
  {
    id: 6,
    title: "Gifts",
    subTitle: "",
    image_Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1R4AL71oqvzRd-8ptqJAxbKWqCZDfyREFSqJk1c066YqqIgs7_ZTu0aLWA&s",
  },
  {
    id: 7,
    title: "Pet Care",
    subTitle: "",
    image_Url:
      "https://www.shutterstock.com/image-photo/portrait-cute-long-haired-dog-260nw-2306664251.jpg",
  },
  {
    id: 8,
    title: "Mobile and Tablets",
    subTitle: "",
    image_Url:
      "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
  },
  {
    id: 9,
    title: "Music and Gaming",
    subTitle: "",
    image_Url:
      "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url:
      "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
  },
];

const NUMBER_OF_ITEMS = 100;
const products = [];
for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
  const category =
    categoriesData[Math.floor(Math.random() * categoriesData.length)];

  const product = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    category: category.title,
    tags:
      faker.commerce.productMaterial() +
      ", " +
      faker.commerce.productMaterial(),
    originalPrice: faker.datatype.number({ min: 50, max: 500 }),
    discountPrice: faker.datatype.number({ min: 30, max: 400 }),
    stock: faker.datatype.number({ min: 1, max: 100 }),
    images: [
      {
        public_id: faker.datatype.uuid(),
        url: faker.image.urlPlaceholder({
          width: 640,
          height: 480,
          backgroundColor: "f2f2f2",
          textColor: "0d0f12",
          format: "png",
          text: "Product Image",
        }), // 'https://loremflickr.com/1234/2345/abstract?lock=56789',
      },
      {
        public_id: faker.datatype.uuid(),
        url: faker.image.urlPlaceholder({
          width: 640,
          height: 480,
          backgroundColor: "f2f2f2",
          textColor: "0d0f12",
          format: "png",
          text: "Product Image",
        }), // 'https://loremflickr.com/1234/2345/abstract?lock=56789',
      },
      {
        public_id: faker.datatype.uuid(),
        url: faker.image.urlPlaceholder({
          width: 640,
          height: 480,
          backgroundColor: "f2f2f2",
          textColor: "0d0f12",
          format: "png",
          text: "Product Image",
        }), // 'https://loremflickr.com/1234/2345/abstract?lock=56789',
      },
      {
        public_id: faker.datatype.uuid(),
        url: faker.image.urlPlaceholder({
          width: 640,
          height: 480,
          backgroundColor: "f2f2f2",
          textColor: "0d0f12",
          format: "png",
          text: "Product Image",
        }), // 'https://loremflickr.com/1234/2345/abstract?lock=56789',
      },
    ],
    reviews: [
      {
        user: {
          id: "665f21c77e618e76e9d6e6a9",
          name: faker.name.fullName(),
          avatar: {
            url: faker.image.avatar(),
          },
        },
        rating: faker.datatype.number({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
        productId: `product${i + 1}`,
        createdAt: faker.date.recent().toISOString(),
      },
      {
        user: {
          id: "665f21c77e618e76e9d6e6a9",
          name: faker.name.fullName(),
          avatar: {
            url: faker.image.avatar(),
          },
        },
        rating: faker.datatype.number({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
        productId: `product${i + 1}`,
        createdAt: faker.date.recent().toISOString(),
      },
      {
        user: {
          id: "665f21c77e618e76e9d6e6a9",
          name: faker.name.fullName(),
          avatar: {
            url: faker.image.avatar(),
          },
        },
        rating: faker.datatype.number({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
        productId: `product${i + 1}`,
        createdAt: faker.date.recent().toISOString(),
      },
      {
        user: {
          id: "665f21c77e618e76e9d6e6a9",
          name: faker.name.fullName(),
          avatar: {
            url: faker.image.avatar(),
          },
        },
        rating: faker.datatype.number({ min: 1, max: 5 }),
        comment: faker.lorem.sentence(),
        productId: `product${i + 1}`,
        createdAt: faker.date.recent().toISOString(),
      },
    ],
    ratings: faker.datatype.number({ min: 1, max: 5 }),
    shopId: `shop${Math.ceil((i + 1) / 10)}`,
    shop: {
      id: `shop${Math.ceil((i + 1) / 10)}`,
      name: `Shop ${Math.ceil((i + 1) / 10)}`,
      avatar: {
        url: faker.image.avatar(),
      },
    },
    sold_out: faker.datatype.number({ min: 0, max: 10 }),
    createdAt: faker.date.past().toISOString(),
  };
  products.push(product);
}

fs.writeFileSync("faker/products.json", JSON.stringify(products, null, 2));

console.log("products.json file has been generated with 100 products.");
