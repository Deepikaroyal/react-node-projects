const Bnb = require("../model/bnbModel");
const fs = require("fs");
const ObjectsToCsv = require("objects-to-csv");


async function getBnbCount(params, res) {
  try {
    const result = await Bnb.aggregate([
      {
        $group: {
          _id: "$address.country",
          count: { $sum: 1 },
        },
      },
    ]);

    if (params.download) {
      // Convert the result to CSV format
      const csvData = new ObjectsToCsv(result);

      // Save the CSV data to a file
      await csvData.toDisk('./result.csv');

      // Set the appropriate headers for file download
      res.attachment('result.csv');

      // Create a read stream of the file
      const fileStream = fs.createReadStream('./result.csv');

      // Pipe the file stream to the response object
      fileStream.pipe(res);

      // Delete the file after it's sent
      fileStream.on('end', () => {
        fs.unlinkSync('./result.csv');
      });

      return; // Return early to prevent sending additional response
    }

    return result;
  } catch (err) {
    console.error('Error in getBnbCount:', err);
    return err;
  }
}

async function getTopBnb() {
  try {
    let result = Bnb.aggregate([
      {
        $sort: { "review_scores.review_scores_rating": -1 },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          description: 1,
          "review_scores.review_scores_rating":
            "$review_scores.review_scores_rating",
        },
      },
      {
        $limit: 5,
      },
    ]);
    return result;
  } catch (err) {
    console.error("Error in getTopBnb:", err);
    return err;
  }
}

async function listWithRange(params) {
try{
let result = Bnb.aggregate([
 {
  $geoNear: {
    near: {  
      type:'Point',
      coordinates:[parseFloat(params.longitude),parseFloat(params.latitude)]
    },
    distanceField:'distance',
    maxDistance:parseFloat(params.range)*1000,
    spherical: true
  }
  },
  // {
  // $match : {
  //   distance: {$lte:  parseFloat(params.range)*1000,} 
  // }
  // },
  {
    $project: {
    _id: 0,
    name:1,
    description:1,
    "address.country": 1
    }
  }
 
])
return result
} catch(err) {
  console.error("Error in listWithRange:", err);
  return err;
}
}

module.exports = {
  getBnbCount,
  getTopBnb,
  listWithRange
};
