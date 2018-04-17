const seeder = require('mongoose-seed');
const environment = require('./environments/environment');

// Connect to MongoDB via Mongoose
(async function seed() {
    try {
        await mongoose.connect(environment.MONGO_URI, {});

        // Load Mongoose models
        seeder.loadModels([
            'app/model1File.js',
            'app/model2File.js'
        ]);

        // Clear specified collections
        seeder.clearModels(['Model1', 'Model2'], function () {
            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data, () => {
                seeder.disconnect();
            });
        });
    }
    catch (e) {
        console.log('Could not connect to MONGO!!!');
        console.log(e);
        process.exit(1);
    }
})();


// Data array containing seed data - documents organized by Model
const data = [
    {
        'model': 'Model1',
        'documents': [
            {
                'name': 'Doc1',
                'value': 200
            },
            {
                'name': 'Doc2',
                'value': 400
            }
        ]
    }
];
