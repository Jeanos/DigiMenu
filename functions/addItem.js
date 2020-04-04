
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyj7vjRuZK7FXWN2'}).base('appUH5QpkHD34IaBw');


base('Menus').create([
  {
    "fields": {
      "MenuName": "Hummus",
      "Description": "tzatziki, dill + olives, crispy pita\n\n",
      "Attachments": [
        {
          "url": "https://dl.airtable.com/.attachments/3890be4257f5d164da48857c87e0d1d1/6ebdd7e4/Hummus.jpg"
        }
      ],
      "Price": "$ 14"
    }
  },
  {
    "fields": {
      "MenuName": "Hummus",
      "Description": "tzatziki, dill + olives, crispy pita\n\n",
      "Attachments": [
        {
          "url": "https://dl.airtable.com/.attachments/3890be4257f5d164da48857c87e0d1d1/6ebdd7e4/Hummus.jpg"
        }
      ],
      "Price": "$ 14"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});