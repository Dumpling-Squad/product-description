const db = require('./index.js');

var arrayOfImgs = [
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1068364300-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-116358930-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-122343741-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-129312842-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183295373-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-185080176-2048x2048.jpg', //lip stick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-186804673-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-683785299-2048x2048.jpg', //lip stick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-88807455-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-897122950-2048x2048.jpg', //lipstick
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135727477-2048x2048.jpg', //Lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1211303139-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-122646611-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-559367905-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-618217927-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-640043694-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-730144101-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-730144105-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-730144109-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-98477659-2048x2048.jpg', //lip balm
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-867756570-2048x2048.jpg', //eye lashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1029518954-2048x2048.jpg', //eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139672376-2048x2048.jpg', //eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-519069996-2048x2048.jpg', //eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-867756570-2048x2048.jpg', //eye lashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-913898122-2048x2048.jpg', //eye lashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-174670970-2048x2048.jpg', //eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-128485232-2048x2048.jpg', //eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-157425138-2048x2048.jpg', //eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183339656-2048x2048.jpg', //eyelashes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135787449-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-155136172-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-157731865-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-171148644-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-172229249-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-548008547-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-839314812-2048x2048.jpg', //Lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-926168448-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-942144576-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-182797917-2048x2048.jpg', //lotion
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139872080-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139872080-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1139872080-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183414883-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-548008457-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-56516835-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-699167231-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-841228954-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-90999634-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-173807983-2048x2048.jpg', //nail polish
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135753814-2048x2048.jpg', //Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-113708974-2048x2048.jpg', //Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1141068744-2048x2048.jpg', //Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1187320856-2048x2048.jpg', //Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1187320857-2048x2048.jpg', //Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1195863234-2048x2048.jpg', //Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1201635365-2048x2048.jpg', //Concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-138049530-2048x2048.jpg', //concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-200416162-001-2048x2048.jpg', //concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-92782825-2048x2048.jpg', //concealer
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-114395499-2048x2048.jpg', //eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1038971684-2048x2048.jpg', //eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1143222753-2048x2048.jpg', //eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-114395499-2048x2048.jpg', //eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1168921228-2048x2048.jpg', //eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-183031935-2048x2048.jpg', //eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-458935957-2048x2048.jpg', //eye liner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-520278492-2048x2048.jpg', //eyeliner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-870227788-2048x2048.jpg', //eye liner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-632002889-2048x2048.jpg', //eye liner
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1059962886-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-106566237-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-488194819-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-56516848-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-653928456-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-91447846-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-953120006-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-96952636-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1129716834-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1132289833-2048x2048.jpg', //brushes
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299838-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299876-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299915-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176299963-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1176302773-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1183158243-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261576-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261585-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261589-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1206261591-2048x2048.jpg', //blender
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-106566218-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-1135727688-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-114389581-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-471143383-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-529775992-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-591162973-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-670944769-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-73582197-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-926168506-2048x2048.jpg', //Mascara
  'https://mock-website-glossier.s3-us-west-1.amazonaws.com/gettyimages-960725982-2048x2048.jpg' //mascara

];

var arrayOfTitles = ['Lipstick', 'Lip Gloss', 'Eye Lashes', 'Lotion', 'Nail Polish', 'Concealer', 'Eyeliner', 'Brushes', 'Blender', 'Lash Stick'];

var arrayOfSub = [
  'sheer matte lipstick • 0.1 oz / 3 g',
  'cushiony glassy shine • Clear: 0.14 fl oz / 4.2 ml, Red + Holographic: 0.12 fl oz / 3.5 ml • ',
  'Mellow Fibers: For lash follicles.',
  'buildable hydrating creme • 1.7 fl oz / 50 ml • ',
  'Nail Polish • 3 g',
  'undetectable, flexible coverage• 0.17 oz / 4.8 g •',
  'brush point liquid eyeliner• 0.47 ml / 0.01 fl oz •',
  'bristles that tickle',
  'comfortable soft blender',
  'film form mascara• 8.5 g / 0.29 oz •'
];

var arrayOfDescriptions = [
  'A new generation of lipstick',
  'Make your lips pop with a nourishing gloss',
  'The most vibrant lashes to ever grace your face',
  'An ultrarich, buttery moisturizer',
  'Polish that will make your nails PoP',
  'The healthiest concealer you could apply',
  'A highly pigmented gel eyeliner that lasts.',
  'Brush, set, match',
  'Blend with a comfortable grip',
  'Fluffy, instantly groomed lashes'
];

var arrayOfSpecials = [
  'A lip color that gives the look and finish of just-blotted lipstick, without the blo',
  'Fuzzy doe-foot applicator scoops up just the right amount of gloss, giving you instant shine in one swipe',
  'Vibrant lashes that make your eyes pop',
  'A blend of shea and murumuru butters melt right into skin for a sumptuous feel',
  'Have the hands of a model with polish that glows',
  'Control your glow by applying with the precise doe-foot applicator and blend seamlessly onto cheekbones, brow bones, the Cupid’s bow, and eyelids',
  'Waterproof formula doesn’t crease, smudge, tug, or skip when you apply it and lasts up to 12 hours (matte shades last in the waterline for up to 8 hours)',
  'Silky synthetic fibers pick up the exact amount of Wowder you need (never too little, never too much)',
  'The softest blender that gets the job done',
  'Curls and sculpts as it lengthens, creating a natural “baby extension” effect without clumping'
];

var arrayOfKnowledge = [
  'Buildable', 'Cruelty Free', 'Easy', 'Enhancing', 'Hydrating', 'Noncomedogenic', 'Nourishing', 'Purifying', 'Soothing', 'Vegan'
];

var arrayOfIcons = [
  'https://mock-logos.s3-us-west-1.amazonaws.com/buildable.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/cruelty+free.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/easy.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/enhancing.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/hydrating.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/Noncomedogenic.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/nourishing.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/purifying.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/soothing.png',
  'https://mock-logos.s3-us-west-1.amazonaws.com/vegan.png'
];

var arrayOfKeyWords = [
  'Lipstick', 'Lip Balm', 'Lashes', 'Lotion', 'Nail Polish', 'Concealer', 'Eyeliner', 'Brushes', 'Blender', 'Mascara', 'Easy', 'Buildable', 'Hydrating', 'Vegan', 'Cruelty Free', 'Enhancing',
  'Soothing', 'Purifying', 'Nourishing', 'Noncomedogenic'
];

var arrayOfPrices = [
  10, 12, 5, 9, 15, 20, 8, 6, 3, 17
];

var arrayOfShades = [
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch1.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch2.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch3.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch4.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch5.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch6.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch2.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch3.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch4.jpg',
  'https://mock-website-shades.s3-us-west-1.amazonaws.com/swatch5.jpg'
]

var createData = function () {
  var object = [];
  var object2 = [];
  var num = 0;
  var titleNum = 0;

  var array = arrayOfTitles;
  var newTitleArray = [];

  var array2 = arrayOfDescriptions;
  var newDescriptions = [];

  var array3 = arrayOfSpecials;
  var newSpecial = [];

  var array4 = arrayOfSub;
  var newSub = [];

  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < 10; j++) {
      newTitleArray.push(array[i]);
      newDescriptions.push(array2[i]);
      newSpecial.push(array3[i]);
      newSub.push(array4[i]);
    }
  }

  while(num < 10) {

    for(var i = 0; i < 10; i++) {
      object.push({title: newTitleArray[titleNum + i], subTitle: newSub[titleNum + i], description: newDescriptions[titleNum + i], specialty: newSpecial[titleNum + i], price: arrayOfPrices[i]});
    }

    for(var i = 0; i < 10; i++) {
      object2.push({goodToKnow: arrayOfKnowledge[i], icons: arrayOfIcons[i], shades: arrayOfShades[i], keywords: arrayOfKeyWords[i]});
    }

    titleNum += 10;
    num++
  }


  object.map(object => {
    db.query(`INSERT INTO product (title, subTitle, description, specialty, price) VALUES ("${object.title}", "${object.subTitle}", "${object.description}", "${object.specialty}", ${object.price});`, (err, result) => {
      if (err) {
        console.log("Couldn't seed table");
      } else {
        console.log('Table seeded');
      }
    });
  });

  object2.map(object => {
    db.query(`INSERT INTO details (goodToKnow, icons, shades, keywords) VALUES ("${object.goodToKnow}", "${object.icons}", "${object.shades}", "${object.keywords}");`, (err, result) => {
      if (err) {
        console.log("Couldn't seed details");
      } else {
        console.log('Details seeded');
      }
    });
  });

  arrayOfImgs.map(image => {
    db.query(`INSERT INTO images (image) VALUES ("${image}");`, (err, result) => {
      if (err) {
        console.log("Couldn't seed images");
      } else {
        console.log('Images seeded');
      }
    })
  })

}


createData();