const db = require('../db')
const Coaster = require('../models/coaster.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const coasters = [
    {
      name: 'Steel Vengeance',
      themePark: 'Cedar Point',
      height: 205,
      largestDrop: 200,
      steepestAngle: 90,
      speed: 74,
      inversions: 4,
      image:
        'https://www.coaster101.com/wp-content/uploads/2017/08/steel-vengeance-cedar-point-2018.jpg',
      score: 4.94,
      comments: []
    },
    {
      name: 'Velocicoaster',
      themePark: 'Islands of Adventure',
      height: 155,
      largestDrop: 140,
      steepestAngle: 80,
      speed: 70,
      inversions: 4,
      image:
        'https://cloudfront-us-east-1.images.arcpublishing.com/tbt/6TJAT3R7HRDMDGZUS6QN7UVRKE.jpg',
      score: 4.92,
      comments: []
    },
    {
      name: 'Fury 325',
      themePark: 'Carowinds',
      height: 325,
      largestDrop: 320,
      steepestAngle: 81,
      speed: 95,
      inversions: 0,
      image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/ca-en-us/blogs/content-images/spring-2017/fury325_408.jpg',
      score: 4.86,
      comments: []
    },
    {
      name: 'Iron Gwazi',
      themePark: 'Busch Gardens Tampa',
      height: 206,
      largestDrop: 206,
      steepestAngle: 91,
      speed: 76,
      inversions: 2,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/73/Iron_Gwazi_%2811%29.jpg',
      score: 4.84,
      comments: []
    },
    {
      name: 'El Toro',
      themePark: 'Six Flags Great Adventure',
      height: 188,
      largestDrop: 181,
      steepestAngle: 76,
      speed: 70,
      inversions: 0,
      image:
        'https://townsquare.media/site/385/files/2022/08/attachment-06-el-toro-2.jpg?w=630&q=75',
      score: 4.8,
      comments: []
    },
    {
      name: 'Lightning Rod',
      themePark: 'Dollywood',
      height: 207,
      largestDrop: 165,
      steepestAngle: 73,
      speed: 73,
      inversions: 0,
      image:
        'https://www.tripsavvy.com/thmb/f2H-VCVlADkeVgYY5rffiiTmU9M=/3931x3145/filters:fill(auto,1)/Lightning-Rod-coaster-Dollywood-5887c0295f9b58bdb36752d8.JPG',
      score: 4.79,
      comments: []
    },
    {
      name: 'Millenium Force',
      themePark: 'Cedar Point',
      height: 310,
      largestDrop: 300,
      steepestAngle: 80,
      speed: 93,
      inversions: 0,
      image:
        'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/cp-en-us/poi/rides/cp-millennium-force-tileimagev2.jpg',
      score: 4.76,
      comments: []
    },
    {
      name: 'The Voyage',
      themePark: 'Holiday World',
      height: 173,
      largestDrop: 154,
      steepestAngle: 66,
      speed: 67,
      inversions: 0,
      image:
        'https://www.coaster101.com/wp-content/uploads/2015/09/DSC05092.jpg',
      score: 4.71,
      comments: []
    },
    {
      name: 'Iron Rattler',
      themePark: 'Six Flags Fiesta Texas',
      height: 179,
      largestDrop: 171,
      steepestAngle: 81,
      speed: 70,
      inversions: 1,
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/dsc_0374-1-scaled.jpg',
      score: 4.7,
      comments: []
    },
    {
      name: 'Twisted Collosus',
      themePark: 'Six Flags Magic Mountain',
      height: 121,
      largestDrop: 128,
      steepestAngle: 80,
      speed: 57,
      inversions: 2,
      image:
        'https://cdn.abcotvs.com/dip/images/285465_082814-kabc-twisted-colossus-img.jpg?w=1600',
      score: 4.69,
      comments: []
    }
  ]

  await Coaster.insertMany(coasters)
  console.log('Created Coasters')
}
const run = async () => {
  await main()
  db.close()
}

run()
