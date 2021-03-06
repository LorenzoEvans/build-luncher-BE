exports.seed = function(knex, Promise) {
  return knex('schools')
    .del()
    .then(function() {
      return knex('schools').insert([
        {
          id: 1,
          schoolName: 'Marion-Sterling Elementary School',
          state: 'OH',
          zip: 44115,
          fundsNeeded: 2500,
          fundsReceived: 525,
          adminID: 1,
        },
        {
          id: 2,
          schoolName: 'Nathan Hale Junior High',
          state: 'OK',
          zip: 74129,
          fundsNeeded: 3200,
          fundsReceived: 0,
          adminID: 2,
        },
        {
          id: 3,
          schoolName: 'Crow Agency School',
          state: 'MT',
          zip: 59022,
          fundsNeeded: 1200,
          fundsReceived: 660,
          adminID: 3,
        },
        {
          id: 4,
          schoolName: 'East St. Louis Lincoln Middle School',
          state: 'IL',
          zip: 62201,
          fundsNeeded: 6200,
          fundsReceived: 500,
          adminID: 4,
        },
        {
          id: 5,
          schoolName: '3D Academy',
          state: 'TX',
          zip: 78537,
          fundsNeeded: 3500,
          fundsReceived: 1510,
          adminID: 5,
        },
        {
          id: 6,
          schoolName: 'Tomorrows Builders Charter School',
          state: 'IL',
          zip: 62202,
          fundsNeeded: 8200,
          fundsReceived: 1160,
          adminID: 6,
        },
        {
          id: 7,
          schoolName: 'Albany High School',
          state: 'GA',
          zip: 31701,
          fundsNeeded: 1500,
          fundsReceived: 390,
          adminID: 7,
        },
        {
          id: 8,
          schoolName: 'Porter High School',
          state: 'TX',
          zip: 77365,
          fundsNeeded: 3500,
          fundsReceived: 140,
          adminID: 8,
        },
        {
          id: 9,
          schoolName: 'Paul Robeson High School',
          state: 'IL',
          zip: 60621,
          fundsNeeded: 2300,
          fundsReceived: 1800,
          adminID: 9,
        },
        {
          id: 10,
          schoolName: 'Reading Senior High School',
          state: 'PA',
          zip: 19604,
          fundsNeeded: 800,
          fundsReceived: 390,
          adminID: 10,
        },
        {
          id: 11,
          schoolName: 'Beecher High School',
          state: 'IL',
          zip: 60401,
          fundsNeeded: 2800,
          fundsReceived: 180,
          adminID: 11,
        },
        {
          id: 12,
          schoolName: 'Central High School',
          state: 'MI',
          zip: 48206,
          fundsNeeded: 5250,
          fundsReceived: 160,
          adminID: 12,
        },
        {
          id: 13,
          schoolName: 'Frederick Douglass High',
          state: 'MD',
          zip: 21217,
          fundsNeeded: 8050,
          fundsReceived: 10,
          adminID: 13,
        },
        {
          id: 14,
          schoolName: 'Silver Bluff High School',
          state: 'SC',
          zip: 29803,
          fundsNeeded: 1700,
          fundsReceived: 95,
          adminID: 14,
        },
        {
          id: 15,
          schoolName: 'Montgomery High School',
          state: 'CA',
          zip: 80023,
          fundsNeeded: 2000,
          fundsReceived: 455,
          adminID: 15,
        },
        {
          id: 16,
          schoolName: 'Bear Lodge High School',
          state: 'WY',
          zip: 82729,
          fundsNeeded: 300,
          fundsReceived: 70,
          adminID: 16,
        },
        {
          id: 17,
          schoolName: 'Moanalua High School',
          state: 'HI',
          zip: 96819,
          fundsNeeded: 3200,
          fundsReceived: 35,
          adminID: 17,
        },
        {
          id: 18,
          schoolName: 'Perry High School',
          state: 'AZ',
          zip: 85297,
          fundsNeeded: 950,
          fundsReceived: 0,
          adminID: 18,
        },
      ]);
    });
};
